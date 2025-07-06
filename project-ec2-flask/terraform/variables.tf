variable "project_name" {
    default  = "flask-bluegreen"
} 
variable "instance_type" {
    default = "t2.micro"
}
variable "key_name" {
    description = "EC2 Key Pair"
    default = "12dayChallenge"
}
variable "ami_id" {
    default = "ami-084568db4383264d4"       # Need to look and change if its not correct
}
variable "aws_access_key" {}
variable "aws_secret_key" {}
