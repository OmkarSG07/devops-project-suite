resource "aws_vpc" "main" {
    cidr_block = "10.0.0.0/16"
}
resource "aws_subnet" "subnet1" {
    vpc_id                  = aws_vpc.main.id
    cidr_block              = "10.0.1.0/24"
    availability_zone       = "us-east-1a"
    map_public_ip_on_launch = true
}
resource "aws_subnet" "subnet2" {
  vpc_id                  = aws_vpc.main.id
  cidr_block              = "10.0.2.0/24"
  availability_zone       = "us-east-1b"
  map_public_ip_on_launch = true
}
resource "aws_security_group" "flask_sg" {
    name            = "flask_sg"
    description    = "Allow HTTP and SSH"
    vpc_id          = aws_vpc.main.id

    ingress {
        from_port   = 22
        to_port     = 22
        protocol    = "tcp"
        cidr_blocks = ["0.0.0.0/0"]
    }

    ingress {
        from_port   = 80
        to_port     = 80
        protocol    = "tcp"
        cidr_blocks = ["0.0.0.0/0"]
    }

    egress {
        from_port  = 0
        to_port   = 0
        protocol  = "-1"
        cidr_blocks = ["0.0.0.0/0"] 
    }
}
resource "aws_instance" "blue" {
    ami = var.ami_id
    instance_type = "t2.micro"
    key_name = var.key_name
    subnet_id = aws_subnet.subnet1.id
    vpc_security_group_ids = [aws_security_group.flask_sg.id]
    tags = {
        Name = "blue"
    }
}
resource "aws_instance" "green" {
    ami = var.ami_id
    instance_type = "t2.micro"
    key_name = var.key_name
    subnet_id = aws_subnet.subnet1.id
    vpc_security_group_ids = [aws_security_group.flask_sg.id]
    tags = {
        Name = "green"
    }
}
resource "aws_lb" "app_alb" {
    name = "flask-alb"
    internal =  false
    load_balancer_type = "application"
    subnets = [aws_subnet.subnet1.id , aws_subnet.subnet2.id ]
    security_groups = [aws_security_group.flask_sg.id] 
}
resource "aws_lb_target_group" "blue_tg" {
    name = "bluetg1"
    port = 80
    protocol = "HTTP"
    vpc_id = aws_vpc.main.id
}
resource "aws_lb_target_group" "green_tg" {
    name = "greentg2"
    port = 80
    protocol = "HTTP"
    vpc_id = aws_vpc.main.id
}
resource "aws_lb_listener" "alb_listener" {
    load_balancer_arn = aws_lb.app_alb.arn
    port = 80
    protocol = "HTTP"

    default_action {
        type = "forward"
        target_group_arn = aws_lb_target_group.blue_tg.arn
    }
}
resource "aws_lb_target_group_attachment" "blue_attach" {
    target_group_arn = aws_lb_target_group.blue_tg.arn
    target_id = aws_instance.blue.id
    port = 80
}
resource "aws_lb_target_group_attachment" "green_attach" {
    target_group_arn = aws_lb_target_group.green_tg.arn
    target_id = aws_instance.green.id
    port = 80
}
resource "aws_internet_gateway" "igw" {
  vpc_id = aws_vpc.main.id
}
resource "aws_route_table" "public_rt" {
  vpc_id = aws_vpc.main.id

  route {
    cidr_block = "0.0.0.0/0"
    gateway_id = aws_internet_gateway.igw.id
  }
}
resource "aws_route_table_association" "a" {
  subnet_id      = aws_subnet.subnet1.id
  route_table_id = aws_route_table.public_rt.id
}

resource "aws_route_table_association" "b" {
  subnet_id      = aws_subnet.subnet2.id
  route_table_id = aws_route_table.public_rt.id
}