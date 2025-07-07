output "all_instance_public_ips" {
  value = {
    Blue  = aws_instance.blue.public_ip,
    Green = aws_instance.green.public_ip
  }
}
output "alb_dns" {
    value = aws_lb.app_alb.dns_name
} 
