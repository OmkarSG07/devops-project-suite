# 🐳 DevOps Project: Blue-Green Deployment of Flask App with CI/CD, Monitoring & Load Testing

> 🚀 **Production-Ready Infrastructure with EC2, ALB, Docker, GitHub Actions, Ansible, Terraform, Prometheus, Grafana, and JMeter**

---

## 📌 Project Summary

This project demonstrates a **complete end-to-end DevOps pipeline** for a Flask-based image-sharing web app (like Instagram) deployed on **AWS EC2** with **Blue-Green Deployment** architecture.

### ✅ Key Highlights

* **Blue-Green Deployment** using AWS ALB
* **Infrastructure as Code** using Terraform
* **Configuration Management** with Ansible
* **CI/CD Pipeline** using GitHub Actions
* **Containerized App** using Docker
* **Real-Time Monitoring** with Prometheus & Grafana
* **Load Testing** using Apache JMeter

---

## 🏗️ Architecture Diagram

```
         GitHub Repo
             │
      GitHub Actions CI/CD
             │
     ┌───────┴────────┐
     │                │
  Deploy to       Deploy to
  Blue EC2        Green EC2
     │                │
     └────┬──────┬────┘
          │   ALB   │
        Switch Target
       Groups (Blue/Green)
             │
       Access via DNS
```

---

## 🔧 Tech Stack

| Category           | Tools Used                           |
| ------------------ | ------------------------------------ |
| Infrastructure     | AWS (EC2, ALB, Security Groups, IAM) |
| IaC                | Terraform (with modules & outputs)   |
| Configuration Mgmt | Ansible                              |
| CI/CD Automation   | GitHub Actions                       |
| App                | Python Flask + Docker                |
| Monitoring         | Prometheus + Grafana                 |
| Load Testing       | Apache JMeter                        |

---

## 📁 Project Structure

```
project-ec2-flask/
├── ansible/                # Ansible playbooks and inventory
├── monitoring/             # Prometheus and Grafana stack
├── jmeter/                 # JMeter load test plans
├── terraform/              # Terraform files to create EC2, ALB, SG
├── .github/workflows/      # CI/CD workflows
├── app/                    # Flask app with Dockerfile
└── README.md
```

---

## 🚀 CI/CD Flow (GitHub Actions)

1. Push to `main` triggers CI workflow
2. Detect current ALB live target (Blue or Green)
3. Deploy to the **inactive environment**
4. Validate health of new instance
5. Switch ALB to new instance group (optional)

---

## 📦 Terraform Modules

* **EC2 Instances** (Blue & Green)
* **Security Groups**
* **ALB with Target Groups**
* **Outputs**: ALB DNS, EC2 IPs

### 🛠️ Command

```bash
cd terraform
terraform init
terraform apply
```

---

## ⚙️ Ansible Setup

Used to install Docker, clone repo, and run the container.

```bash
ansible-playbook -i inventory.ini playbook.yaml
```

---

## 🔍 Monitoring & Dashboards

* **Prometheus** running on EC2 (port 9090)
* **Grafana** on EC2 (port 3000)
* Node Exporter for CPU, memory, disk metrics
* Alerting rules setup (e.g., CPU > 80%)

---

## 🧪 Load Testing (JMeter)

* Simulates 50 users hitting the app with 10 loops
* Results observed in real-time via Grafana

```bash
jmeter -n -t flask_load_test.jmx -l results.jtl -e -o report/
```

---
