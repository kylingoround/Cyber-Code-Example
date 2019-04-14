const test_graph=
{
    "status": "success",
    "time_graphs": [
      {
        "date": "2018-12-09",
        "graph": {
          "nodes": [
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "ip",
              "score": 13,
              "id": "21.232.98.32"
            },
            {
              "num_anomalies": 0,
              "severity": 2,
              "num_alerts": 2,
              "label": "ip",
              "score": 70,
              "id": "22.232.64.117"
            },
            {
              "num_anomalies": 0,
              "severity": 2,
              "num_alerts": 2,
              "label": "ip",
              "score": 77,
              "id": "22.234.40.23"
            },
            {
              "num_anomalies": 1,
              "severity": 3,
              "num_alerts": 1,
              "label": "ip",
              "score": 91,
              "id": "22.232.210.16"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "user",
              "score": 2,
              "id": "JCGE"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "ip",
              "score": 0,
              "id": "198.70.66.50"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "ip",
              "score": 0,
              "id": "22.72.1.199"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "ip",
              "score": 16,
              "id": "21.232.101.51"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "ip",
              "score": 0,
              "id": "198.70.66.9"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "department",
              "score": 0,
              "id": "Other"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "ip",
              "score": 0,
              "id": "72.21.81.240"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "department",
              "score": 0,
              "id": "Printer"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "department",
              "score": 0,
              "id": "BDD of LAB"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "user",
              "score": 8,
              "id": "DCWONG"
            },
            {
              "num_anomalies": 1,
              "severity": 3,
              "num_alerts": 2,
              "label": "ip",
              "score": 99,
              "id": "22.31.66.17"
            },
            {
              "num_anomalies": 1,
              "severity": 3,
              "num_alerts": 1,
              "label": "ip",
              "score": 91,
              "id": "22.232.210.65"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "department",
              "score": 0,
              "id": "TSD of NYB"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "ip",
              "score": 12,
              "id": "22.232.98.225"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "department",
              "score": 0,
              "id": "12th_floor "
            },
            {
              "num_anomalies": 0,
              "severity": 1,
              "num_alerts": 1,
              "label": "ip",
              "score": 48,
              "id": "22.232.9.79"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "department",
              "score": 0,
              "id": "HRD of NYB"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "ip",
              "score": 14,
              "id": "21.232.110.18"
            }
          ],
          "links": [
            {
              "source": "DCWONG",
              "label": "own",
              "id": "own-DCWONG-21.232.98.32",
              "weight": 1,
              "target": "21.232.98.32"
            },
            {
              "source": "JCGE",
              "label": "own",
              "id": "own-JCGE-22.232.9.79",
              "weight": 1,
              "target": "22.232.9.79"
            },
            {
              "source": "22.232.210.65",
              "label": "access",
              "id": "22.232.210.65-72.21.81.240",
              "weight": 1,
              "target": "72.21.81.240"
            },
            {
              "source": "22.232.210.65",
              "label": "access",
              "id": "22.232.210.65-198.70.66.50",
              "weight": 1,
              "target": "198.70.66.50"
            },
            {
              "source": "22.232.210.65",
              "label": "access",
              "id": "22.232.210.65-198.70.66.9",
              "weight": 1,
              "target": "198.70.66.9"
            },
            {
              "source": "22.31.66.17",
              "label": "access",
              "id": "22.31.66.17-21.232.101.51",
              "weight": 1,
              "target": "21.232.101.51"
            },
            {
              "source": "21.232.98.32",
              "label": "within",
              "id": "within-21.232.98.32-HRD of NYB",
              "weight": 1,
              "target": "HRD of NYB"
            },
            {
              "source": "22.232.98.225",
              "label": "within",
              "id": "within-22.232.98.225-12th_floor ",
              "weight": 1,
              "target": "12th_floor "
            },
            {
              "source": "22.232.64.117",
              "label": "within",
              "id": "within-22.232.64.117-Other",
              "weight": 1,
              "target": "Other"
            },
            {
              "source": "22.31.66.17",
              "label": "within",
              "id": "within-22.31.66.17-Other",
              "weight": 1,
              "target": "Other"
            },
            {
              "source": "22.234.40.23",
              "label": "within",
              "id": "within-22.234.40.23-Other",
              "weight": 1,
              "target": "Other"
            },
            {
              "source": "22.232.210.65",
              "label": "within",
              "id": "within-22.232.210.65-Other",
              "weight": 1,
              "target": "Other"
            },
            {
              "source": "22.232.210.16",
              "label": "within",
              "id": "within-22.232.210.16-Other",
              "weight": 1,
              "target": "Other"
            },
            {
              "source": "JCGE",
              "label": "within",
              "id": "within-JCGE-BDD of LAB",
              "weight": 1,
              "target": "BDD of LAB"
            },
            {
              "source": "DCWONG",
              "label": "within",
              "id": "within-DCWONG-HRD of NYB",
              "weight": 1,
              "target": "HRD of NYB"
            },
            {
              "source": "22.232.9.79",
              "label": "within",
              "id": "within-22.232.9.79-BDD of LAB",
              "weight": 1,
              "target": "BDD of LAB"
            },
            {
              "source": "22.72.1.199",
              "label": "within",
              "id": "within-22.72.1.199-Other",
              "weight": 1,
              "target": "Other"
            },
            {
              "source": "21.232.101.51",
              "label": "within",
              "id": "within-21.232.101.51-TSD of NYB",
              "weight": 1,
              "target": "TSD of NYB"
            },
            {
              "source": "21.232.110.18",
              "label": "within",
              "id": "within-21.232.110.18-Printer",
              "weight": 1,
              "target": "Printer"
            }
          ]
        },
        "cycle": "day"
      },
      {
        "date": "2018-12-09",
        "graph": {
          "nodes": [
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "shared folder",
              "score": 0,
              "id": "1-Liquidity Risk Oversight/EPS/Operational Deposit"
            },
            {
              "num_anomalies": 1,
              "severity": 3,
              "num_alerts": 6,
              "label": "ip",
              "score": 98,
              "id": "22.232.64.117"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "shared folder",
              "score": 0,
              "id": "JC/my trainings"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "shared folder",
              "score": 0,
              "id": "1-liquidity risk oversight/eps/operational deposit"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "shared folder",
              "score": 0,
              "id": "JC/JC Castillo - Compliance Training/Vendor List "
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "shared folder",
              "score": 0,
              "id": "JC/Training 2018/rmd's replacement for training"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "shared folder",
              "score": 0,
              "id": "jc/training 2018/new hire training session"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "shared folder",
              "score": 0,
              "id": "Employees' Guide/2005/employees' guide (revised 12-2005)"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "shared folder",
              "score": 0,
              "id": "Turnover Report/employee turn over report.xlsx"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "shared folder",
              "score": 0,
              "id": "Personal Folders/Ying Ping/annual report"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "shared folder",
              "score": 0,
              "id": "JC/BAI Account Revisions/deactivated accounts"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "shared folder",
              "score": 0,
              "id": "[ADC]/20181209181835.pdf"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "ip",
              "score": 0,
              "id": "22.232.97.190"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "shared folder",
              "score": 0,
              "id": "RAINCOLE/TU YUAN/Billing"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "shared folder",
              "score": 0,
              "id": "QCU/ORD/Turnover Rate"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "shared folder",
              "score": 0,
              "id": "Team Logistic/Prior Staff/mrd-departmental staffing gap analysis.xlsx\uecf0"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "shared folder",
              "score": 0,
              "id": "[ADC]/20181209185231.pdf"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "ip",
              "score": 0,
              "id": "22.232.101.164"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "department",
              "score": 0,
              "id": "HRD of NYB"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "shared folder",
              "score": 0,
              "id": "Personal Folders/Victor Lee/Prior to Move"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "shared folder",
              "score": 0,
              "id": "Junpeng Yang/Saba - Related/From Lyn"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "ip",
              "score": 0,
              "id": "13.68.93.109"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "shared folder",
              "score": 0,
              "id": "JC/Training 2018/new hire training session"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "ip",
              "score": 0,
              "id": "40.67.186.102"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "shared folder",
              "score": 0,
              "id": "Team Logistic/Prior Staff/mrd-performance.xlsx:zone.identifier"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "shared folder",
              "score": 0,
              "id": "JC/Training 2018/New Hire Training Session"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "shared folder",
              "score": 0,
              "id": "[ADC]/20181209224303.pdf"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "shared folder",
              "score": 0,
              "id": "Lyn/Training lyn/lyn adc"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "user",
              "score": 2,
              "id": "JCGE"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "shared folder",
              "score": 0,
              "id": "RAINCOLE/TU YUAN/ACH Updated"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "shared folder",
              "score": 0,
              "id": "0Committees/CAC/april 11, 2018"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "shared folder",
              "score": 0,
              "id": "Third Party Vendor Management/Very High/WageWorks"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "shared folder",
              "score": 0,
              "id": "JC/training 2018"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "shared folder",
              "score": 0,
              "id": "Team Logistic/Prior Staff/mrd-departmental staffing gap analysis.xlsx:zone.identifier"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "shared folder",
              "score": 0,
              "id": "Job Description/2006-06 Job Description/act"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "shared folder",
              "score": 0,
              "id": "Attendance/Audit/CFPB"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "ip",
              "score": 0,
              "id": "8.252.56.254"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "shared folder",
              "score": 0,
              "id": "[ADC]/20181209181730.pdf"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "shared folder",
              "score": 0,
              "id": "Training Center/\u96c6\u56e2\u5185\u57f9\u8bad/2016 Head Office Training Attendees"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "shared folder",
              "score": 0,
              "id": "HR Forms/Employment/New Hire Forms"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "shared folder",
              "score": 0,
              "id": "Junpeng Yang/BAI/issues"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "ip",
              "score": 0,
              "id": "23.33.102.74"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "ip",
              "score": 0,
              "id": "8.252.18.126"
            },
            {
              "num_anomalies": 1,
              "severity": 3,
              "num_alerts": 2,
              "label": "ip",
              "score": 98,
              "id": "21.232.110.18"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "shared folder",
              "score": 0,
              "id": "QCU/ord"
            },
            {
              "num_anomalies": 1,
              "severity": 3,
              "num_alerts": 8,
              "label": "ip",
              "score": 92,
              "id": "21.232.98.32"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "ip",
              "score": 0,
              "id": "23.54.187.27"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "shared folder",
              "score": 0,
              "id": "Team Logistic/prior staff"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "shared folder",
              "score": 0,
              "id": "[ADC]/20181209234911.pdf"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "ip",
              "score": 0,
              "id": "8.253.129.249"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "shared folder",
              "score": 0,
              "id": "[ADC]/20181209181707.pdf"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "ip",
              "score": 0,
              "id": "173.222.115.51"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "shared folder",
              "score": 0,
              "id": "RECRUITING!/\u8d85\u7ea7\u4fa6\u63a2CJZT/associate recruitment"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "shared folder",
              "score": 0,
              "id": "Ocean Liu/\u8865\u5145\u6750\u6599/\u5168\u9762\u4fe1\u7528\u98ce\u9669\u7ba1\u7406\u7cfb\u5217\u57f9\u8bad\u73ed\u4f18\u79c0\u57f9\u8bad\u9879\u76ee\u7533\u8bf7\u5b66\u5458\u624b\u518c"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "ip",
              "score": 0,
              "id": "23.33.118.232"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "shared folder",
              "score": 0,
              "id": "Benefits/125 Benefits/2007 FSA"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "shared folder",
              "score": 0,
              "id": "Oscar Siu Chi Yeung/jack"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "ip",
              "score": 0,
              "id": "8.252.37.254"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "shared folder",
              "score": 0,
              "id": "Attendance/Audit/IAD's Request"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "shared folder",
              "score": 0,
              "id": "Benefits/401(k) Forms/Franklin Templeton"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "shared folder",
              "score": 0,
              "id": "/"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "shared folder",
              "score": 0,
              "id": "Training Center/2012/5\u6708\u6d59\u5546\u94f6\u884c\u8003\u5bdf\u4ea4\u6d41\u56e2"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "shared folder",
              "score": 0,
              "id": "[ADC]/20181209192448.pdf"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "ip",
              "score": 0,
              "id": "23.196.175.12"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "shared folder",
              "score": 0,
              "id": "[ADC]/20181209181610.pdf"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "shared folder",
              "score": 0,
              "id": "JC/JC Castillo - Compliance Training/2017 Trainings"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "shared folder",
              "score": 0,
              "id": "RECRUITING!/internal recruitment"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "shared folder",
              "score": 0,
              "id": "Attendance/Audit/OCC Audit"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "shared folder",
              "score": 0,
              "id": "Training Center/\u96c6\u56e2\u5185\u57f9\u8bad/2018 Head Office Training Attendees"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "shared folder",
              "score": 0,
              "id": "Org Chart/Org Chart 2016/OTHER UPDATES"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "shared folder",
              "score": 0,
              "id": "0-OCC Exam/OCC_2018/Onsite Requests"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "shared folder",
              "score": 0,
              "id": "JC/JC CFPB Examination Deliverables/reg e electronic fund transfer -"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "shared folder",
              "score": 0,
              "id": "Jing Zhang/\u6587\u4ef6\u5907\u4efd/0401-0415\u94f6\u884c\u5361\u4e1a\u52a1\u53d1\u5c55\u57f9\u8bad\u73ed"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "ip",
              "score": 0,
              "id": "13.32.234.178"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "shared folder",
              "score": 0,
              "id": "QCU/ORD/it risk management"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "shared folder",
              "score": 0,
              "id": "Job Description/Job descriptions by department/lab - los angeles branch"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "ip",
              "score": 0,
              "id": "8.252.28.126"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "shared folder",
              "score": 0,
              "id": "Lyn/2018 Training/Training Related Records"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "shared folder",
              "score": 0,
              "id": "Job Description/Job descriptions by department/JD Error"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "shared folder",
              "score": 0,
              "id": "Benefits/401(k) Forms/Great West"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "shared folder",
              "score": 0,
              "id": "Annual Party/2017 Party/BOC 2017 GALA PHOTO"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "ip",
              "score": 0,
              "id": "173.222.113.160"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "shared folder",
              "score": 0,
              "id": "Training Center/2018/1014-1026 \u5883\u5916\u76d1\u7ba1\u6cd5\u6848\u53ca\u5168\u7403\u5e02\u573a\u4e1a\u52a1\u4ea7\u54c1\u5408\u89c4\u57f9\u8bad\u73ed"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "shared folder",
              "score": 0,
              "id": "0Committees/RMICC/july25 2016"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "ip",
              "score": 0,
              "id": "23.73.148.34"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "ip",
              "score": 0,
              "id": "40.77.231.3"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "shared folder",
              "score": 0,
              "id": "Bettina/cap jd/2017 jd"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "shared folder",
              "score": 0,
              "id": "[ADC]/20181209182805.pdf"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "shared folder",
              "score": 0,
              "id": "0-OCC Exam/OCC_2017/2017 OCC Annual Safety and Soundness Examination"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "shared folder",
              "score": 0,
              "id": "Attendance/Audit/Other Dept audit req"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "shared folder",
              "score": 0,
              "id": "Training Center/\u603b\u884cNOTES \u901a\u77e5\u8981\u6c42\u7b49/20180625 \u5168\u5458\u53cd\u6d17\u94b1\u57f9\u8bad\u7edf\u8ba1"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "shared folder",
              "score": 0,
              "id": "Team Logistic/Prior Staff/~$mrd-departmental staffing gap analysis.xlsx\uecf0"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "shared folder",
              "score": 0,
              "id": "Training Center/2015/1-10-16 to 1-29-16\u7f51\u7edc\u94f6\u884c\u6218\u7565\u4e13\u9898\u57f9\u8bad\u73ed"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "shared folder",
              "score": 0,
              "id": "Team Logistic/Prior Staff/mrd-performance.xlsx\uecf0"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "ip",
              "score": 0,
              "id": "8.253.130.254"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "shared folder",
              "score": 0,
              "id": "IAD/Quarterly Continuous Monitoring/q1 2017"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "ip",
              "score": 0,
              "id": "8.249.47.254"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "ip",
              "score": 0,
              "id": "8.253.129.204"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "shared folder",
              "score": 0,
              "id": "Turnover Report/~$employee turn over report.xlsx"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "shared folder",
              "score": 0,
              "id": "RECRUITMENT TEAM 2017/Consultant Recruiters/Grace"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "ip",
              "score": 0,
              "id": "8.249.43.254"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "shared folder",
              "score": 0,
              "id": "1-Liquidity Risk Oversight/eps"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "user",
              "score": 9,
              "id": "DCWONG"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "shared folder",
              "score": 0,
              "id": "Attendance/Audit/KPMG"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "shared folder",
              "score": 0,
              "id": "Personal Folders/Victor Lee/Move Part 2"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "shared folder",
              "score": 0,
              "id": "[ADC]/20181209181754.pdf"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "ip",
              "score": 0,
              "id": "8.252.66.126"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "shared folder",
              "score": 0,
              "id": "RECRUITMENT TEAM 2017/Consultant Management/New Consultant Management Project"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "shared folder",
              "score": 0,
              "id": "0Committees/CAC/may 29, 2018"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "ip",
              "score": 0,
              "id": "13.78.186.254"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "shared folder",
              "score": 0,
              "id": "Org Chart/Org Chart 2016/march"
            },
            {
              "num_anomalies": 0,
              "severity": 2,
              "num_alerts": 5,
              "label": "ip",
              "score": 85,
              "id": "22.232.210.16"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "shared folder",
              "score": 0,
              "id": "0-HS Projects/RiskMetrics_KRI/opsrisk"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "shared folder",
              "score": 0,
              "id": "Jennifer/Resume Received/Resume sent to HR"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "shared folder",
              "score": 0,
              "id": "0Committees/CAC/August 7, 2018"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "shared folder",
              "score": 0,
              "id": "Benefits/vsp vision"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "shared folder",
              "score": 0,
              "id": "Team Logistic/Prior Staff/~$mrd-departmental staffing gap analysis.xlsx"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "shared folder",
              "score": 0,
              "id": "HR Forms/Old Forms/hr forms for usi website"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "shared folder",
              "score": 0,
              "id": "[ADC]/20181209164701.pdf"
            },
            {
              "num_anomalies": 1,
              "severity": 3,
              "num_alerts": 11,
              "label": "ip",
              "score": 99,
              "id": "22.232.9.79"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "ip",
              "score": 0,
              "id": "8.252.18.254"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "shared folder",
              "score": 0,
              "id": "HR Memo/HR Major Events "
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "ip",
              "score": 0,
              "id": "22.232.99.144"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "shared folder",
              "score": 0,
              "id": "Team Logistic/Prior Staff/mrd-performance.xlsx"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "shared folder",
              "score": 0,
              "id": "0Committees/CAC/November 1, 2018"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "shared folder",
              "score": 0,
              "id": "Attendance/Audit/Ernst "
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "ip",
              "score": 0,
              "id": "203.119.95.53"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "shared folder",
              "score": 0,
              "id": "Lyn/BOC 2019 Annual Party/z"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "shared folder",
              "score": 0,
              "id": "Cissy/ppt\u7d20\u6750"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "shared folder",
              "score": 0,
              "id": "0Committees/CAC/May 22, 2018"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "shared folder",
              "score": 0,
              "id": "[ADC]/20181209181633.pdf"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "shared folder",
              "score": 0,
              "id": "Attendance/Payroll Report/2010"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "department",
              "score": 0,
              "id": "BDD of LAB"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "shared folder",
              "score": 0,
              "id": "Turnover Report/employee turn over report.xlsx:zone.identifier"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "department",
              "score": 0,
              "id": "Other"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "shared folder",
              "score": 0,
              "id": "Jack Qiu/transfer"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "shared folder",
              "score": 0,
              "id": "Training Center/\u96c6\u56e2\u5185\u57f9\u8bad/2017 Head Office Training Attendees"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "shared folder",
              "score": 0,
              "id": "Turnover Report/employee turn over report.xlsx\uecf0"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "ip",
              "score": 0,
              "id": "96.7.198.96"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "shared folder",
              "score": 0,
              "id": "2016 Heightened Standards/1- occ heightened standards"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "shared folder",
              "score": 0,
              "id": "Notes Pure Client/Lotus/Notes"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "shared folder",
              "score": 0,
              "id": "QCU/ORD/turnover rate"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "ip",
              "score": 0,
              "id": "8.251.15.254"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "shared folder",
              "score": 0,
              "id": "1-Liquidity Risk Oversight/EPS/2052a"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "shared folder",
              "score": 0,
              "id": "0-OCC Exam/OCC_2018/2018 OCC Annual Safety and Soundness Examination"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "shared folder",
              "score": 0,
              "id": "Personal Folders/Xiaohui/2017"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "shared folder",
              "score": 0,
              "id": "[ADC]/20181209232214.pdf"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "shared folder",
              "score": 0,
              "id": "[ADC]/20181209181816.pdf"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "shared folder",
              "score": 0,
              "id": "Org Chart/Org Chart 2014/With Photos"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "ip",
              "score": 0,
              "id": "8.249.45.254"
            },
            {
              "num_anomalies": 1,
              "severity": 3,
              "num_alerts": 3,
              "label": "ip",
              "score": 93,
              "id": "22.234.40.23"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "ip",
              "score": 0,
              "id": "8.252.38.126"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "shared folder",
              "score": 0,
              "id": "Team Logistic/Prior Staff/mrd-departmental staffing gap analysis.xlsx"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "shared folder",
              "score": 0,
              "id": "BOC Training/2018/Records"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "shared folder",
              "score": 0,
              "id": "BOC Training/2017/Training Records"
            },
            {
              "num_anomalies": 1,
              "severity": 3,
              "num_alerts": 8,
              "label": "ip",
              "score": 99,
              "id": "22.72.1.199"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "shared folder",
              "score": 0,
              "id": "Team Logistic/Prior Staff/~$mrd-performance.xlsx"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "ip",
              "score": 0,
              "id": "65.55.44.108"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "ip",
              "score": 0,
              "id": "22.31.66.17"
            },
            {
              "num_anomalies": 0,
              "severity": 2,
              "num_alerts": 9,
              "label": "ip",
              "score": 82,
              "id": "22.232.210.65"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "ip",
              "score": 0,
              "id": "8.253.129.121"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "shared folder",
              "score": 0,
              "id": "Team Logistic/Prior Staff/~$mrd-performance.xlsx\uecf0"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "department",
              "score": 0,
              "id": "12th_floor "
            },
            {
              "num_anomalies": 1,
              "severity": 3,
              "num_alerts": 2,
              "label": "ip",
              "score": 92,
              "id": "22.232.98.225"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "shared folder",
              "score": 0,
              "id": "0Committees/ORC/2017"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "shared folder",
              "score": 0,
              "id": "Jennifer/Resume Received/resume sent to hr"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "shared folder",
              "score": 0,
              "id": "Leona Liu/Empty/Empty"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "shared folder",
              "score": 0,
              "id": "Job Description/2017 Job Description/word docs from dianna"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "ip",
              "score": 0,
              "id": "23.14.181.100"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "ip",
              "score": 0,
              "id": "8.251.11.254"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "department",
              "score": 0,
              "id": "Printer"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "ip",
              "score": 0,
              "id": "13.78.168.230"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "ip",
              "score": 0,
              "id": "23.4.43.27"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "shared folder",
              "score": 0,
              "id": "1-Operational Risk/New Product/ir swap_xccy swap"
            },
            {
              "num_anomalies": 0,
              "severity": 0,
              "num_alerts": 0,
              "label": "ip",
              "score": 0,
              "id": "8.252.67.254"
            }
          ],
          "links": [
            {
              "source": "DCWONG",
              "label": "own",
              "id": "own-DCWONG-21.232.98.32",
              "weight": 1,
              "target": "21.232.98.32"
            },
            {
              "source": "JCGE",
              "label": "own",
              "id": "own-JCGE-22.232.9.79",
              "weight": 1,
              "target": "22.232.9.79"
            },
            {
              "source": "22.72.1.199",
              "label": "access",
              "id": "22.72.1.199-22.232.101.164",
              "weight": 1,
              "target": "22.232.101.164"
            },
            {
              "source": "22.72.1.199",
              "label": "access",
              "id": "22.72.1.199-22.232.97.190",
              "weight": 1,
              "target": "22.232.97.190"
            },
            {
              "source": "21.232.110.18",
              "label": "access",
              "id": "21.232.110.18-[ADC]/20181209232214.pdf",
              "weight": 1,
              "target": "[ADC]/20181209232214.pdf"
            },
            {
              "source": "21.232.110.18",
              "label": "access",
              "id": "21.232.110.18-[ADC]/20181209182805.pdf",
              "weight": 1,
              "target": "[ADC]/20181209182805.pdf"
            },
            {
              "source": "21.232.110.18",
              "label": "access",
              "id": "21.232.110.18-[ADC]/20181209181816.pdf",
              "weight": 1,
              "target": "[ADC]/20181209181816.pdf"
            },
            {
              "source": "21.232.110.18",
              "label": "access",
              "id": "21.232.110.18-[ADC]/20181209164701.pdf",
              "weight": 1,
              "target": "[ADC]/20181209164701.pdf"
            },
            {
              "source": "21.232.110.18",
              "label": "access",
              "id": "21.232.110.18-[ADC]/20181209234911.pdf",
              "weight": 1,
              "target": "[ADC]/20181209234911.pdf"
            },
            {
              "source": "21.232.110.18",
              "label": "access",
              "id": "21.232.110.18-[ADC]/20181209192448.pdf",
              "weight": 1,
              "target": "[ADC]/20181209192448.pdf"
            },
            {
              "source": "21.232.110.18",
              "label": "access",
              "id": "21.232.110.18-[ADC]/20181209181610.pdf",
              "weight": 1,
              "target": "[ADC]/20181209181610.pdf"
            },
            {
              "source": "21.232.110.18",
              "label": "access",
              "id": "21.232.110.18-[ADC]/20181209181633.pdf",
              "weight": 1,
              "target": "[ADC]/20181209181633.pdf"
            },
            {
              "source": "21.232.110.18",
              "label": "access",
              "id": "21.232.110.18-[ADC]/20181209181707.pdf",
              "weight": 1,
              "target": "[ADC]/20181209181707.pdf"
            },
            {
              "source": "21.232.110.18",
              "label": "access",
              "id": "21.232.110.18-[ADC]/20181209181730.pdf",
              "weight": 1,
              "target": "[ADC]/20181209181730.pdf"
            },
            {
              "source": "21.232.110.18",
              "label": "access",
              "id": "21.232.110.18-[ADC]/20181209185231.pdf",
              "weight": 1,
              "target": "[ADC]/20181209185231.pdf"
            },
            {
              "source": "21.232.110.18",
              "label": "access",
              "id": "21.232.110.18-[ADC]/20181209224303.pdf",
              "weight": 1,
              "target": "[ADC]/20181209224303.pdf"
            },
            {
              "source": "21.232.110.18",
              "label": "access",
              "id": "21.232.110.18-[ADC]/20181209181754.pdf",
              "weight": 1,
              "target": "[ADC]/20181209181754.pdf"
            },
            {
              "source": "21.232.110.18",
              "label": "access",
              "id": "21.232.110.18-[ADC]/20181209181835.pdf",
              "weight": 1,
              "target": "[ADC]/20181209181835.pdf"
            },
            {
              "source": "22.234.40.23",
              "label": "access",
              "id": "22.234.40.23-22.232.99.144",
              "weight": 1,
              "target": "22.232.99.144"
            },
            {
              "source": "22.232.9.79",
              "label": "access",
              "id": "22.232.9.79-203.119.95.53",
              "weight": 1,
              "target": "203.119.95.53"
            },
            {
              "source": "22.232.9.79",
              "label": "access",
              "id": "22.232.9.79-23.54.187.27",
              "weight": 1,
              "target": "23.54.187.27"
            },
            {
              "source": "22.232.9.79",
              "label": "access",
              "id": "22.232.9.79-40.67.186.102",
              "weight": 1,
              "target": "40.67.186.102"
            },
            {
              "source": "22.232.9.79",
              "label": "access",
              "id": "22.232.9.79-23.4.43.27",
              "weight": 1,
              "target": "23.4.43.27"
            },
            {
              "source": "22.232.98.225",
              "label": "access",
              "id": "22.232.98.225-Team Logistic/prior staff",
              "weight": 1,
              "target": "Team Logistic/prior staff"
            },
            {
              "source": "22.232.98.225",
              "label": "access",
              "id": "22.232.98.225-Team Logistic/Prior Staff/~$mrd-departmental staffing gap analysis.xlsx\uecf0",
              "weight": 1,
              "target": "Team Logistic/Prior Staff/~$mrd-departmental staffing gap analysis.xlsx\uecf0"
            },
            {
              "source": "22.232.98.225",
              "label": "access",
              "id": "22.232.98.225-0-OCC Exam/OCC_2018/2018 OCC Annual Safety and Soundness Examination",
              "weight": 1,
              "target": "0-OCC Exam/OCC_2018/2018 OCC Annual Safety and Soundness Examination"
            },
            {
              "source": "22.232.98.225",
              "label": "access",
              "id": "22.232.98.225-Personal Folders/Ying Ping/annual report",
              "weight": 1,
              "target": "Personal Folders/Ying Ping/annual report"
            },
            {
              "source": "22.232.98.225",
              "label": "access",
              "id": "22.232.98.225-Team Logistic/Prior Staff/mrd-performance.xlsx\uecf0",
              "weight": 1,
              "target": "Team Logistic/Prior Staff/mrd-performance.xlsx\uecf0"
            },
            {
              "source": "22.232.98.225",
              "label": "access",
              "id": "22.232.98.225-Team Logistic/Prior Staff/~$mrd-performance.xlsx",
              "weight": 1,
              "target": "Team Logistic/Prior Staff/~$mrd-performance.xlsx"
            },
            {
              "source": "22.232.98.225",
              "label": "access",
              "id": "22.232.98.225-Team Logistic/Prior Staff/mrd-departmental staffing gap analysis.xlsx:zone.identifier",
              "weight": 1,
              "target": "Team Logistic/Prior Staff/mrd-departmental staffing gap analysis.xlsx:zone.identifier"
            },
            {
              "source": "22.232.98.225",
              "label": "access",
              "id": "22.232.98.225-0-OCC Exam/OCC_2017/2017 OCC Annual Safety and Soundness Examination",
              "weight": 1,
              "target": "0-OCC Exam/OCC_2017/2017 OCC Annual Safety and Soundness Examination"
            },
            {
              "source": "22.232.98.225",
              "label": "access",
              "id": "22.232.98.225-0-OCC Exam/OCC_2018/Onsite Requests",
              "weight": 1,
              "target": "0-OCC Exam/OCC_2018/Onsite Requests"
            },
            {
              "source": "22.232.98.225",
              "label": "access",
              "id": "22.232.98.225-Team Logistic/Prior Staff/~$mrd-departmental staffing gap analysis.xlsx",
              "weight": 1,
              "target": "Team Logistic/Prior Staff/~$mrd-departmental staffing gap analysis.xlsx"
            },
            {
              "source": "22.232.98.225",
              "label": "access",
              "id": "22.232.98.225-Team Logistic/Prior Staff/mrd-departmental staffing gap analysis.xlsx",
              "weight": 1,
              "target": "Team Logistic/Prior Staff/mrd-departmental staffing gap analysis.xlsx"
            },
            {
              "source": "22.232.98.225",
              "label": "access",
              "id": "22.232.98.225-0Committees/CAC/August 7, 2018",
              "weight": 1,
              "target": "0Committees/CAC/August 7, 2018"
            },
            {
              "source": "22.232.98.225",
              "label": "access",
              "id": "22.232.98.225-0Committees/CAC/april 11, 2018",
              "weight": 1,
              "target": "0Committees/CAC/april 11, 2018"
            },
            {
              "source": "22.232.98.225",
              "label": "access",
              "id": "22.232.98.225-0Committees/CAC/may 29, 2018",
              "weight": 1,
              "target": "0Committees/CAC/may 29, 2018"
            },
            {
              "source": "22.232.98.225",
              "label": "access",
              "id": "22.232.98.225-1-Liquidity Risk Oversight/EPS/Operational Deposit",
              "weight": 1,
              "target": "1-Liquidity Risk Oversight/EPS/Operational Deposit"
            },
            {
              "source": "22.232.98.225",
              "label": "access",
              "id": "22.232.98.225-Personal Folders/Victor Lee/Prior to Move",
              "weight": 1,
              "target": "Personal Folders/Victor Lee/Prior to Move"
            },
            {
              "source": "22.232.98.225",
              "label": "access",
              "id": "22.232.98.225-1-Operational Risk/New Product/ir swap_xccy swap",
              "weight": 1,
              "target": "1-Operational Risk/New Product/ir swap_xccy swap"
            },
            {
              "source": "22.232.98.225",
              "label": "access",
              "id": "22.232.98.225-0Committees/RMICC/july25 2016",
              "weight": 1,
              "target": "0Committees/RMICC/july25 2016"
            },
            {
              "source": "22.232.98.225",
              "label": "access",
              "id": "22.232.98.225-0-HS Projects/RiskMetrics_KRI/opsrisk",
              "weight": 1,
              "target": "0-HS Projects/RiskMetrics_KRI/opsrisk"
            },
            {
              "source": "22.232.98.225",
              "label": "access",
              "id": "22.232.98.225-0Committees/CAC/November 1, 2018",
              "weight": 1,
              "target": "0Committees/CAC/November 1, 2018"
            },
            {
              "source": "22.232.98.225",
              "label": "access",
              "id": "22.232.98.225-Team Logistic/Prior Staff/~$mrd-performance.xlsx\uecf0",
              "weight": 1,
              "target": "Team Logistic/Prior Staff/~$mrd-performance.xlsx\uecf0"
            },
            {
              "source": "22.232.98.225",
              "label": "access",
              "id": "22.232.98.225-IAD/Quarterly Continuous Monitoring/q1 2017",
              "weight": 1,
              "target": "IAD/Quarterly Continuous Monitoring/q1 2017"
            },
            {
              "source": "22.232.98.225",
              "label": "access",
              "id": "22.232.98.225-1-liquidity risk oversight/eps/operational deposit",
              "weight": 1,
              "target": "1-liquidity risk oversight/eps/operational deposit"
            },
            {
              "source": "22.232.98.225",
              "label": "access",
              "id": "22.232.98.225-Personal Folders/Xiaohui/2017",
              "weight": 1,
              "target": "Personal Folders/Xiaohui/2017"
            },
            {
              "source": "22.232.98.225",
              "label": "access",
              "id": "22.232.98.225-1-Liquidity Risk Oversight/EPS/2052a",
              "weight": 1,
              "target": "1-Liquidity Risk Oversight/EPS/2052a"
            },
            {
              "source": "22.232.98.225",
              "label": "access",
              "id": "22.232.98.225-0Committees/CAC/May 22, 2018",
              "weight": 1,
              "target": "0Committees/CAC/May 22, 2018"
            },
            {
              "source": "22.232.98.225",
              "label": "access",
              "id": "22.232.98.225-0Committees/ORC/2017",
              "weight": 1,
              "target": "0Committees/ORC/2017"
            },
            {
              "source": "22.232.98.225",
              "label": "access",
              "id": "22.232.98.225-Team Logistic/Prior Staff/mrd-performance.xlsx:zone.identifier",
              "weight": 1,
              "target": "Team Logistic/Prior Staff/mrd-performance.xlsx:zone.identifier"
            },
            {
              "source": "22.232.98.225",
              "label": "access",
              "id": "22.232.98.225-Team Logistic/Prior Staff/mrd-performance.xlsx",
              "weight": 1,
              "target": "Team Logistic/Prior Staff/mrd-performance.xlsx"
            },
            {
              "source": "22.232.98.225",
              "label": "access",
              "id": "22.232.98.225-Team Logistic/Prior Staff/mrd-departmental staffing gap analysis.xlsx\uecf0",
              "weight": 1,
              "target": "Team Logistic/Prior Staff/mrd-departmental staffing gap analysis.xlsx\uecf0"
            },
            {
              "source": "22.232.98.225",
              "label": "access",
              "id": "22.232.98.225-1-Liquidity Risk Oversight/eps",
              "weight": 1,
              "target": "1-Liquidity Risk Oversight/eps"
            },
            {
              "source": "22.232.98.225",
              "label": "access",
              "id": "22.232.98.225-Personal Folders/Victor Lee/Move Part 2",
              "weight": 1,
              "target": "Personal Folders/Victor Lee/Move Part 2"
            },
            {
              "source": "21.232.98.32",
              "label": "access",
              "id": "21.232.98.32-Attendance/Audit/Other Dept audit req",
              "weight": 1,
              "target": "Attendance/Audit/Other Dept audit req"
            },
            {
              "source": "21.232.98.32",
              "label": "access",
              "id": "21.232.98.32-Oscar Siu Chi Yeung/jack",
              "weight": 1,
              "target": "Oscar Siu Chi Yeung/jack"
            },
            {
              "source": "21.232.98.32",
              "label": "access",
              "id": "21.232.98.32-QCU/ORD/it risk management",
              "weight": 1,
              "target": "QCU/ORD/it risk management"
            },
            {
              "source": "21.232.98.32",
              "label": "access",
              "id": "21.232.98.32-JC/my trainings",
              "weight": 1,
              "target": "JC/my trainings"
            },
            {
              "source": "21.232.98.32",
              "label": "access",
              "id": "21.232.98.32-Junpeng Yang/BAI/issues",
              "weight": 1,
              "target": "Junpeng Yang/BAI/issues"
            },
            {
              "source": "21.232.98.32",
              "label": "access",
              "id": "21.232.98.32-RAINCOLE/TU YUAN/ACH Updated",
              "weight": 1,
              "target": "RAINCOLE/TU YUAN/ACH Updated"
            },
            {
              "source": "21.232.98.32",
              "label": "access",
              "id": "21.232.98.32-Turnover Report/employee turn over report.xlsx\uecf0",
              "weight": 1,
              "target": "Turnover Report/employee turn over report.xlsx\uecf0"
            },
            {
              "source": "21.232.98.32",
              "label": "access",
              "id": "21.232.98.32-Employees' Guide/2005/employees' guide (revised 12-2005)",
              "weight": 1,
              "target": "Employees' Guide/2005/employees' guide (revised 12-2005)"
            },
            {
              "source": "21.232.98.32",
              "label": "access",
              "id": "21.232.98.32-/",
              "weight": 1,
              "target": "/"
            },
            {
              "source": "21.232.98.32",
              "label": "access",
              "id": "21.232.98.32-QCU/ORD/turnover rate",
              "weight": 1,
              "target": "QCU/ORD/turnover rate"
            },
            {
              "source": "21.232.98.32",
              "label": "access",
              "id": "21.232.98.32-Benefits/401(k) Forms/Great West",
              "weight": 1,
              "target": "Benefits/401(k) Forms/Great West"
            },
            {
              "source": "21.232.98.32",
              "label": "access",
              "id": "21.232.98.32-HR Forms/Old Forms/hr forms for usi website",
              "weight": 1,
              "target": "HR Forms/Old Forms/hr forms for usi website"
            },
            {
              "source": "21.232.98.32",
              "label": "access",
              "id": "21.232.98.32-Benefits/vsp vision",
              "weight": 1,
              "target": "Benefits/vsp vision"
            },
            {
              "source": "21.232.98.32",
              "label": "access",
              "id": "21.232.98.32-Org Chart/Org Chart 2016/OTHER UPDATES",
              "weight": 1,
              "target": "Org Chart/Org Chart 2016/OTHER UPDATES"
            },
            {
              "source": "21.232.98.32",
              "label": "access",
              "id": "21.232.98.32-Attendance/Audit/Ernst ",
              "weight": 1,
              "target": "Attendance/Audit/Ernst "
            },
            {
              "source": "21.232.98.32",
              "label": "access",
              "id": "21.232.98.32-JC/JC CFPB Examination Deliverables/reg e electronic fund transfer -",
              "weight": 1,
              "target": "JC/JC CFPB Examination Deliverables/reg e electronic fund transfer -"
            },
            {
              "source": "21.232.98.32",
              "label": "access",
              "id": "21.232.98.32-RECRUITMENT TEAM 2017/Consultant Management/New Consultant Management Project",
              "weight": 1,
              "target": "RECRUITMENT TEAM 2017/Consultant Management/New Consultant Management Project"
            },
            {
              "source": "21.232.98.32",
              "label": "access",
              "id": "21.232.98.32-Training Center/2012/5\u6708\u6d59\u5546\u94f6\u884c\u8003\u5bdf\u4ea4\u6d41\u56e2",
              "weight": 1,
              "target": "Training Center/2012/5\u6708\u6d59\u5546\u94f6\u884c\u8003\u5bdf\u4ea4\u6d41\u56e2"
            },
            {
              "source": "21.232.98.32",
              "label": "access",
              "id": "21.232.98.32-Attendance/Audit/KPMG",
              "weight": 1,
              "target": "Attendance/Audit/KPMG"
            },
            {
              "source": "21.232.98.32",
              "label": "access",
              "id": "21.232.98.32-Cissy/ppt\u7d20\u6750",
              "weight": 1,
              "target": "Cissy/ppt\u7d20\u6750"
            },
            {
              "source": "21.232.98.32",
              "label": "access",
              "id": "21.232.98.32-Benefits/401(k) Forms/Franklin Templeton",
              "weight": 1,
              "target": "Benefits/401(k) Forms/Franklin Templeton"
            },
            {
              "source": "21.232.98.32",
              "label": "access",
              "id": "21.232.98.32-Notes Pure Client/Lotus/Notes",
              "weight": 1,
              "target": "Notes Pure Client/Lotus/Notes"
            },
            {
              "source": "21.232.98.32",
              "label": "access",
              "id": "21.232.98.32-RECRUITING!/internal recruitment",
              "weight": 1,
              "target": "RECRUITING!/internal recruitment"
            },
            {
              "source": "21.232.98.32",
              "label": "access",
              "id": "21.232.98.32-JC/BAI Account Revisions/deactivated accounts",
              "weight": 1,
              "target": "JC/BAI Account Revisions/deactivated accounts"
            },
            {
              "source": "21.232.98.32",
              "label": "access",
              "id": "21.232.98.32-JC/JC Castillo - Compliance Training/2017 Trainings",
              "weight": 1,
              "target": "JC/JC Castillo - Compliance Training/2017 Trainings"
            },
            {
              "source": "21.232.98.32",
              "label": "access",
              "id": "21.232.98.32-JC/Training 2018/rmd's replacement for training",
              "weight": 1,
              "target": "JC/Training 2018/rmd's replacement for training"
            },
            {
              "source": "21.232.98.32",
              "label": "access",
              "id": "21.232.98.32-Turnover Report/employee turn over report.xlsx",
              "weight": 1,
              "target": "Turnover Report/employee turn over report.xlsx"
            },
            {
              "source": "21.232.98.32",
              "label": "access",
              "id": "21.232.98.32-Job Description/2006-06 Job Description/act",
              "weight": 1,
              "target": "Job Description/2006-06 Job Description/act"
            },
            {
              "source": "21.232.98.32",
              "label": "access",
              "id": "21.232.98.32-QCU/ORD/Turnover Rate",
              "weight": 1,
              "target": "QCU/ORD/Turnover Rate"
            },
            {
              "source": "21.232.98.32",
              "label": "access",
              "id": "21.232.98.32-Training Center/\u603b\u884cNOTES \u901a\u77e5\u8981\u6c42\u7b49/20180625 \u5168\u5458\u53cd\u6d17\u94b1\u57f9\u8bad\u7edf\u8ba1",
              "weight": 1,
              "target": "Training Center/\u603b\u884cNOTES \u901a\u77e5\u8981\u6c42\u7b49/20180625 \u5168\u5458\u53cd\u6d17\u94b1\u57f9\u8bad\u7edf\u8ba1"
            },
            {
              "source": "21.232.98.32",
              "label": "access",
              "id": "21.232.98.32-2016 Heightened Standards/1- occ heightened standards",
              "weight": 1,
              "target": "2016 Heightened Standards/1- occ heightened standards"
            },
            {
              "source": "21.232.98.32",
              "label": "access",
              "id": "21.232.98.32-RECRUITING!/\u8d85\u7ea7\u4fa6\u63a2CJZT/associate recruitment",
              "weight": 1,
              "target": "RECRUITING!/\u8d85\u7ea7\u4fa6\u63a2CJZT/associate recruitment"
            },
            {
              "source": "21.232.98.32",
              "label": "access",
              "id": "21.232.98.32-Leona Liu/Empty/Empty",
              "weight": 1,
              "target": "Leona Liu/Empty/Empty"
            },
            {
              "source": "21.232.98.32",
              "label": "access",
              "id": "21.232.98.32-HR Forms/Employment/New Hire Forms",
              "weight": 1,
              "target": "HR Forms/Employment/New Hire Forms"
            },
            {
              "source": "21.232.98.32",
              "label": "access",
              "id": "21.232.98.32-RECRUITMENT TEAM 2017/Consultant Recruiters/Grace",
              "weight": 1,
              "target": "RECRUITMENT TEAM 2017/Consultant Recruiters/Grace"
            },
            {
              "source": "21.232.98.32",
              "label": "access",
              "id": "21.232.98.32-Attendance/Audit/CFPB",
              "weight": 1,
              "target": "Attendance/Audit/CFPB"
            },
            {
              "source": "21.232.98.32",
              "label": "access",
              "id": "21.232.98.32-HR Memo/HR Major Events ",
              "weight": 1,
              "target": "HR Memo/HR Major Events "
            },
            {
              "source": "21.232.98.32",
              "label": "access",
              "id": "21.232.98.32-Job Description/Job descriptions by department/lab - los angeles branch",
              "weight": 1,
              "target": "Job Description/Job descriptions by department/lab - los angeles branch"
            },
            {
              "source": "21.232.98.32",
              "label": "access",
              "id": "21.232.98.32-RAINCOLE/TU YUAN/Billing",
              "weight": 1,
              "target": "RAINCOLE/TU YUAN/Billing"
            },
            {
              "source": "21.232.98.32",
              "label": "access",
              "id": "21.232.98.32-JC/Training 2018/New Hire Training Session",
              "weight": 1,
              "target": "JC/Training 2018/New Hire Training Session"
            },
            {
              "source": "21.232.98.32",
              "label": "access",
              "id": "21.232.98.32-Training Center/\u96c6\u56e2\u5185\u57f9\u8bad/2018 Head Office Training Attendees",
              "weight": 1,
              "target": "Training Center/\u96c6\u56e2\u5185\u57f9\u8bad/2018 Head Office Training Attendees"
            },
            {
              "source": "21.232.98.32",
              "label": "access",
              "id": "21.232.98.32-Lyn/2018 Training/Training Related Records",
              "weight": 1,
              "target": "Lyn/2018 Training/Training Related Records"
            },
            {
              "source": "21.232.98.32",
              "label": "access",
              "id": "21.232.98.32-Junpeng Yang/Saba - Related/From Lyn",
              "weight": 1,
              "target": "Junpeng Yang/Saba - Related/From Lyn"
            },
            {
              "source": "21.232.98.32",
              "label": "access",
              "id": "21.232.98.32-Lyn/BOC 2019 Annual Party/z",
              "weight": 1,
              "target": "Lyn/BOC 2019 Annual Party/z"
            },
            {
              "source": "21.232.98.32",
              "label": "access",
              "id": "21.232.98.32-Training Center/\u96c6\u56e2\u5185\u57f9\u8bad/2017 Head Office Training Attendees",
              "weight": 1,
              "target": "Training Center/\u96c6\u56e2\u5185\u57f9\u8bad/2017 Head Office Training Attendees"
            },
            {
              "source": "21.232.98.32",
              "label": "access",
              "id": "21.232.98.32-Ocean Liu/\u8865\u5145\u6750\u6599/\u5168\u9762\u4fe1\u7528\u98ce\u9669\u7ba1\u7406\u7cfb\u5217\u57f9\u8bad\u73ed\u4f18\u79c0\u57f9\u8bad\u9879\u76ee\u7533\u8bf7\u5b66\u5458\u624b\u518c",
              "weight": 1,
              "target": "Ocean Liu/\u8865\u5145\u6750\u6599/\u5168\u9762\u4fe1\u7528\u98ce\u9669\u7ba1\u7406\u7cfb\u5217\u57f9\u8bad\u73ed\u4f18\u79c0\u57f9\u8bad\u9879\u76ee\u7533\u8bf7\u5b66\u5458\u624b\u518c"
            },
            {
              "source": "21.232.98.32",
              "label": "access",
              "id": "21.232.98.32-Jack Qiu/transfer",
              "weight": 1,
              "target": "Jack Qiu/transfer"
            },
            {
              "source": "21.232.98.32",
              "label": "access",
              "id": "21.232.98.32-Attendance/Audit/IAD's Request",
              "weight": 1,
              "target": "Attendance/Audit/IAD's Request"
            },
            {
              "source": "21.232.98.32",
              "label": "access",
              "id": "21.232.98.32-JC/training 2018",
              "weight": 1,
              "target": "JC/training 2018"
            },
            {
              "source": "21.232.98.32",
              "label": "access",
              "id": "21.232.98.32-Jennifer/Resume Received/resume sent to hr",
              "weight": 1,
              "target": "Jennifer/Resume Received/resume sent to hr"
            },
            {
              "source": "21.232.98.32",
              "label": "access",
              "id": "21.232.98.32-Bettina/cap jd/2017 jd",
              "weight": 1,
              "target": "Bettina/cap jd/2017 jd"
            },
            {
              "source": "21.232.98.32",
              "label": "access",
              "id": "21.232.98.32-Benefits/125 Benefits/2007 FSA",
              "weight": 1,
              "target": "Benefits/125 Benefits/2007 FSA"
            },
            {
              "source": "21.232.98.32",
              "label": "access",
              "id": "21.232.98.32-QCU/ord",
              "weight": 1,
              "target": "QCU/ord"
            },
            {
              "source": "21.232.98.32",
              "label": "access",
              "id": "21.232.98.32-BOC Training/2018/Records",
              "weight": 1,
              "target": "BOC Training/2018/Records"
            },
            {
              "source": "21.232.98.32",
              "label": "access",
              "id": "21.232.98.32-Jing Zhang/\u6587\u4ef6\u5907\u4efd/0401-0415\u94f6\u884c\u5361\u4e1a\u52a1\u53d1\u5c55\u57f9\u8bad\u73ed",
              "weight": 1,
              "target": "Jing Zhang/\u6587\u4ef6\u5907\u4efd/0401-0415\u94f6\u884c\u5361\u4e1a\u52a1\u53d1\u5c55\u57f9\u8bad\u73ed"
            },
            {
              "source": "21.232.98.32",
              "label": "access",
              "id": "21.232.98.32-Attendance/Payroll Report/2010",
              "weight": 1,
              "target": "Attendance/Payroll Report/2010"
            },
            {
              "source": "21.232.98.32",
              "label": "access",
              "id": "21.232.98.32-Lyn/Training lyn/lyn adc",
              "weight": 1,
              "target": "Lyn/Training lyn/lyn adc"
            },
            {
              "source": "21.232.98.32",
              "label": "access",
              "id": "21.232.98.32-Turnover Report/~$employee turn over report.xlsx",
              "weight": 1,
              "target": "Turnover Report/~$employee turn over report.xlsx"
            },
            {
              "source": "21.232.98.32",
              "label": "access",
              "id": "21.232.98.32-Org Chart/Org Chart 2016/march",
              "weight": 1,
              "target": "Org Chart/Org Chart 2016/march"
            },
            {
              "source": "21.232.98.32",
              "label": "access",
              "id": "21.232.98.32-Third Party Vendor Management/Very High/WageWorks",
              "weight": 1,
              "target": "Third Party Vendor Management/Very High/WageWorks"
            },
            {
              "source": "21.232.98.32",
              "label": "access",
              "id": "21.232.98.32-Attendance/Audit/OCC Audit",
              "weight": 1,
              "target": "Attendance/Audit/OCC Audit"
            },
            {
              "source": "21.232.98.32",
              "label": "access",
              "id": "21.232.98.32-Training Center/2015/1-10-16 to 1-29-16\u7f51\u7edc\u94f6\u884c\u6218\u7565\u4e13\u9898\u57f9\u8bad\u73ed",
              "weight": 1,
              "target": "Training Center/2015/1-10-16 to 1-29-16\u7f51\u7edc\u94f6\u884c\u6218\u7565\u4e13\u9898\u57f9\u8bad\u73ed"
            },
            {
              "source": "21.232.98.32",
              "label": "access",
              "id": "21.232.98.32-JC/JC Castillo - Compliance Training/Vendor List ",
              "weight": 1,
              "target": "JC/JC Castillo - Compliance Training/Vendor List "
            },
            {
              "source": "21.232.98.32",
              "label": "access",
              "id": "21.232.98.32-jc/training 2018/new hire training session",
              "weight": 1,
              "target": "jc/training 2018/new hire training session"
            },
            {
              "source": "21.232.98.32",
              "label": "access",
              "id": "21.232.98.32-Org Chart/Org Chart 2014/With Photos",
              "weight": 1,
              "target": "Org Chart/Org Chart 2014/With Photos"
            },
            {
              "source": "21.232.98.32",
              "label": "access",
              "id": "21.232.98.32-Training Center/\u96c6\u56e2\u5185\u57f9\u8bad/2016 Head Office Training Attendees",
              "weight": 1,
              "target": "Training Center/\u96c6\u56e2\u5185\u57f9\u8bad/2016 Head Office Training Attendees"
            },
            {
              "source": "21.232.98.32",
              "label": "access",
              "id": "21.232.98.32-Annual Party/2017 Party/BOC 2017 GALA PHOTO",
              "weight": 1,
              "target": "Annual Party/2017 Party/BOC 2017 GALA PHOTO"
            },
            {
              "source": "21.232.98.32",
              "label": "access",
              "id": "21.232.98.32-Training Center/2018/1014-1026 \u5883\u5916\u76d1\u7ba1\u6cd5\u6848\u53ca\u5168\u7403\u5e02\u573a\u4e1a\u52a1\u4ea7\u54c1\u5408\u89c4\u57f9\u8bad\u73ed",
              "weight": 1,
              "target": "Training Center/2018/1014-1026 \u5883\u5916\u76d1\u7ba1\u6cd5\u6848\u53ca\u5168\u7403\u5e02\u573a\u4e1a\u52a1\u4ea7\u54c1\u5408\u89c4\u57f9\u8bad\u73ed"
            },
            {
              "source": "21.232.98.32",
              "label": "access",
              "id": "21.232.98.32-Jennifer/Resume Received/Resume sent to HR",
              "weight": 1,
              "target": "Jennifer/Resume Received/Resume sent to HR"
            },
            {
              "source": "21.232.98.32",
              "label": "access",
              "id": "21.232.98.32-Turnover Report/employee turn over report.xlsx:zone.identifier",
              "weight": 1,
              "target": "Turnover Report/employee turn over report.xlsx:zone.identifier"
            },
            {
              "source": "21.232.98.32",
              "label": "access",
              "id": "21.232.98.32-JC/Training 2018/new hire training session",
              "weight": 1,
              "target": "JC/Training 2018/new hire training session"
            },
            {
              "source": "21.232.98.32",
              "label": "access",
              "id": "21.232.98.32-Job Description/Job descriptions by department/JD Error",
              "weight": 1,
              "target": "Job Description/Job descriptions by department/JD Error"
            },
            {
              "source": "21.232.98.32",
              "label": "access",
              "id": "21.232.98.32-Job Description/2017 Job Description/word docs from dianna",
              "weight": 1,
              "target": "Job Description/2017 Job Description/word docs from dianna"
            },
            {
              "source": "21.232.98.32",
              "label": "access",
              "id": "21.232.98.32-BOC Training/2017/Training Records",
              "weight": 1,
              "target": "BOC Training/2017/Training Records"
            },
            {
              "source": "22.232.64.117",
              "label": "access",
              "id": "22.232.64.117-8.253.130.254",
              "weight": 1,
              "target": "8.253.130.254"
            },
            {
              "source": "22.232.64.117",
              "label": "access",
              "id": "22.232.64.117-23.33.118.232",
              "weight": 1,
              "target": "23.33.118.232"
            },
            {
              "source": "22.232.64.117",
              "label": "access",
              "id": "22.232.64.117-8.252.18.126",
              "weight": 1,
              "target": "8.252.18.126"
            },
            {
              "source": "22.232.64.117",
              "label": "access",
              "id": "22.232.64.117-65.55.44.108",
              "weight": 1,
              "target": "65.55.44.108"
            },
            {
              "source": "22.232.64.117",
              "label": "access",
              "id": "22.232.64.117-23.73.148.34",
              "weight": 1,
              "target": "23.73.148.34"
            },
            {
              "source": "22.232.64.117",
              "label": "access",
              "id": "22.232.64.117-8.253.129.121",
              "weight": 1,
              "target": "8.253.129.121"
            },
            {
              "source": "22.232.64.117",
              "label": "access",
              "id": "22.232.64.117-40.77.231.3",
              "weight": 1,
              "target": "40.77.231.3"
            },
            {
              "source": "22.232.64.117",
              "label": "access",
              "id": "22.232.64.117-23.14.181.100",
              "weight": 1,
              "target": "23.14.181.100"
            },
            {
              "source": "22.232.64.117",
              "label": "access",
              "id": "22.232.64.117-13.78.186.254",
              "weight": 1,
              "target": "13.78.186.254"
            },
            {
              "source": "22.232.64.117",
              "label": "access",
              "id": "22.232.64.117-173.222.115.51",
              "weight": 1,
              "target": "173.222.115.51"
            },
            {
              "source": "22.232.64.117",
              "label": "access",
              "id": "22.232.64.117-8.252.66.126",
              "weight": 1,
              "target": "8.252.66.126"
            },
            {
              "source": "22.232.64.117",
              "label": "access",
              "id": "22.232.64.117-13.78.168.230",
              "weight": 1,
              "target": "13.78.168.230"
            },
            {
              "source": "22.232.64.117",
              "label": "access",
              "id": "22.232.64.117-8.251.11.254",
              "weight": 1,
              "target": "8.251.11.254"
            },
            {
              "source": "22.232.64.117",
              "label": "access",
              "id": "22.232.64.117-96.7.198.96",
              "weight": 1,
              "target": "96.7.198.96"
            },
            {
              "source": "22.232.64.117",
              "label": "access",
              "id": "22.232.64.117-173.222.113.160",
              "weight": 1,
              "target": "173.222.113.160"
            },
            {
              "source": "22.232.64.117",
              "label": "access",
              "id": "22.232.64.117-23.33.102.74",
              "weight": 1,
              "target": "23.33.102.74"
            },
            {
              "source": "22.232.64.117",
              "label": "access",
              "id": "22.232.64.117-23.196.175.12",
              "weight": 1,
              "target": "23.196.175.12"
            },
            {
              "source": "22.232.64.117",
              "label": "access",
              "id": "22.232.64.117-8.253.129.249",
              "weight": 1,
              "target": "8.253.129.249"
            },
            {
              "source": "22.232.64.117",
              "label": "access",
              "id": "22.232.64.117-8.249.45.254",
              "weight": 1,
              "target": "8.249.45.254"
            },
            {
              "source": "22.232.64.117",
              "label": "access",
              "id": "22.232.64.117-8.252.28.126",
              "weight": 1,
              "target": "8.252.28.126"
            },
            {
              "source": "22.232.64.117",
              "label": "access",
              "id": "22.232.64.117-8.253.129.204",
              "weight": 1,
              "target": "8.253.129.204"
            },
            {
              "source": "22.232.64.117",
              "label": "access",
              "id": "22.232.64.117-8.249.43.254",
              "weight": 1,
              "target": "8.249.43.254"
            },
            {
              "source": "22.232.64.117",
              "label": "access",
              "id": "22.232.64.117-13.68.93.109",
              "weight": 1,
              "target": "13.68.93.109"
            },
            {
              "source": "22.232.64.117",
              "label": "access",
              "id": "22.232.64.117-8.251.15.254",
              "weight": 1,
              "target": "8.251.15.254"
            },
            {
              "source": "22.232.64.117",
              "label": "access",
              "id": "22.232.64.117-8.249.47.254",
              "weight": 1,
              "target": "8.249.47.254"
            },
            {
              "source": "22.232.64.117",
              "label": "access",
              "id": "22.232.64.117-8.252.37.254",
              "weight": 1,
              "target": "8.252.37.254"
            },
            {
              "source": "22.232.64.117",
              "label": "access",
              "id": "22.232.64.117-8.252.67.254",
              "weight": 1,
              "target": "8.252.67.254"
            },
            {
              "source": "22.232.64.117",
              "label": "access",
              "id": "22.232.64.117-8.252.18.254",
              "weight": 1,
              "target": "8.252.18.254"
            },
            {
              "source": "22.232.64.117",
              "label": "access",
              "id": "22.232.64.117-13.32.234.178",
              "weight": 1,
              "target": "13.32.234.178"
            },
            {
              "source": "22.232.64.117",
              "label": "access",
              "id": "22.232.64.117-8.252.56.254",
              "weight": 1,
              "target": "8.252.56.254"
            },
            {
              "source": "22.232.64.117",
              "label": "access",
              "id": "22.232.64.117-8.252.38.126",
              "weight": 1,
              "target": "8.252.38.126"
            },
            {
              "source": "22.232.64.117",
              "label": "within",
              "id": "within-22.232.64.117-Other",
              "weight": 1,
              "target": "Other"
            },
            {
              "source": "JCGE",
              "label": "within",
              "id": "within-JCGE-BDD of LAB",
              "weight": 1,
              "target": "BDD of LAB"
            },
            {
              "source": "21.232.110.18",
              "label": "within",
              "id": "within-21.232.110.18-Printer",
              "weight": 1,
              "target": "Printer"
            },
            {
              "source": "21.232.98.32",
              "label": "within",
              "id": "within-21.232.98.32-HRD of NYB",
              "weight": 1,
              "target": "HRD of NYB"
            },
            {
              "source": "22.234.40.23",
              "label": "within",
              "id": "within-22.234.40.23-Other",
              "weight": 1,
              "target": "Other"
            },
            {
              "source": "22.72.1.199",
              "label": "within",
              "id": "within-22.72.1.199-Other",
              "weight": 1,
              "target": "Other"
            },
            {
              "source": "DCWONG",
              "label": "within",
              "id": "within-DCWONG-HRD of NYB",
              "weight": 1,
              "target": "HRD of NYB"
            },
            {
              "source": "22.232.210.16",
              "label": "within",
              "id": "within-22.232.210.16-Other",
              "weight": 1,
              "target": "Other"
            },
            {
              "source": "22.232.9.79",
              "label": "within",
              "id": "within-22.232.9.79-BDD of LAB",
              "weight": 1,
              "target": "BDD of LAB"
            },
            {
              "source": "22.31.66.17",
              "label": "within",
              "id": "within-22.31.66.17-Other",
              "weight": 1,
              "target": "Other"
            },
            {
              "source": "22.232.210.65",
              "label": "within",
              "id": "within-22.232.210.65-Other",
              "weight": 1,
              "target": "Other"
            },
            {
              "source": "22.232.98.225",
              "label": "within",
              "id": "within-22.232.98.225-12th_floor ",
              "weight": 1,
              "target": "12th_floor "
            }
          ]
        },
        "cycle": "night"
      }
    ],
    "start_date": "2018-12-09",
    "end_date": "2018-12-09",
    "agg_graph": {
      "nodes": [
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "shared folder",
          "score": 0,
          "id": "1-Liquidity Risk Oversight/EPS/Operational Deposit"
        },
        {
          "num_anomalies": 1,
          "severity": 3,
          "num_alerts": 8,
          "label": "ip",
          "score": 149,
          "id": "22.232.64.117"
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "shared folder",
          "score": 0,
          "id": "JC/my trainings"
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "shared folder",
          "score": 0,
          "id": "1-liquidity risk oversight/eps/operational deposit"
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "shared folder",
          "score": 0,
          "id": "JC/JC Castillo - Compliance Training/Vendor List "
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "shared folder",
          "score": 0,
          "id": "JC/Training 2018/rmd's replacement for training"
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "shared folder",
          "score": 0,
          "id": "jc/training 2018/new hire training session"
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "shared folder",
          "score": 0,
          "id": "Employees' Guide/2005/employees' guide (revised 12-2005)"
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "shared folder",
          "score": 0,
          "id": "Turnover Report/employee turn over report.xlsx"
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "shared folder",
          "score": 0,
          "id": "Personal Folders/Ying Ping/annual report"
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "shared folder",
          "score": 0,
          "id": "JC/BAI Account Revisions/deactivated accounts"
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "shared folder",
          "score": 0,
          "id": "[ADC]/20181209181835.pdf"
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "ip",
          "score": 0,
          "id": "22.232.97.190"
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "shared folder",
          "score": 0,
          "id": "RAINCOLE/TU YUAN/Billing"
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "shared folder",
          "score": 0,
          "id": "QCU/ORD/Turnover Rate"
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "shared folder",
          "score": 0,
          "id": "Team Logistic/Prior Staff/mrd-departmental staffing gap analysis.xlsx\uecf0"
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "shared folder",
          "score": 0,
          "id": "[ADC]/20181209185231.pdf"
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "ip",
          "score": 0,
          "id": "22.232.101.164"
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "shared folder",
          "score": 0,
          "id": "Personal Folders/Victor Lee/Prior to Move"
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "shared folder",
          "score": 0,
          "id": "Junpeng Yang/Saba - Related/From Lyn"
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "ip",
          "score": 0,
          "id": "13.68.93.109"
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "shared folder",
          "score": 0,
          "id": "JC/Training 2018/new hire training session"
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "ip",
          "score": 0,
          "id": "40.67.186.102"
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "shared folder",
          "score": 0,
          "id": "0-OCC Exam/OCC_2018/2018 OCC Annual Safety and Soundness Examination"
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "shared folder",
          "score": 0,
          "id": "[ADC]/20181209192448.pdf"
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "shared folder",
          "score": 0,
          "id": "Lyn/Training lyn/lyn adc"
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "user",
          "score": 2,
          "id": "JCGE"
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "shared folder",
          "score": 0,
          "id": "RAINCOLE/TU YUAN/ACH Updated"
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "ip",
          "score": 0,
          "id": "8.252.56.254"
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "shared folder",
          "score": 0,
          "id": "Third Party Vendor Management/Very High/WageWorks"
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "ip",
          "score": 16,
          "id": "21.232.101.51"
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "shared folder",
          "score": 0,
          "id": "Team Logistic/Prior Staff/mrd-departmental staffing gap analysis.xlsx:zone.identifier"
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "shared folder",
          "score": 0,
          "id": "[ADC]/20181209181730.pdf"
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "shared folder",
          "score": 0,
          "id": "Attendance/Audit/CFPB"
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "shared folder",
          "score": 0,
          "id": "0Committees/CAC/april 11, 2018"
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "shared folder",
          "score": 0,
          "id": "Job Description/2006-06 Job Description/act"
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "shared folder",
          "score": 0,
          "id": "RECRUITING!/internal recruitment"
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "shared folder",
          "score": 0,
          "id": "Training Center/\u96c6\u56e2\u5185\u57f9\u8bad/2016 Head Office Training Attendees"
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "shared folder",
          "score": 0,
          "id": "HR Forms/Employment/New Hire Forms"
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "shared folder",
          "score": 0,
          "id": "Junpeng Yang/BAI/issues"
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "ip",
          "score": 0,
          "id": "23.33.102.74"
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "ip",
          "score": 0,
          "id": "8.252.18.126"
        },
        {
          "num_anomalies": 1,
          "severity": 3,
          "num_alerts": 2,
          "label": "ip",
          "score": 185,
          "id": "21.232.110.18"
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "shared folder",
          "score": 0,
          "id": "QCU/ord"
        },
        {
          "num_anomalies": 1,
          "severity": 3,
          "num_alerts": 8,
          "label": "ip",
          "score": 176,
          "id": "21.232.98.32"
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "ip",
          "score": 0,
          "id": "23.54.187.27"
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "shared folder",
          "score": 0,
          "id": "Team Logistic/prior staff"
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "shared folder",
          "score": 0,
          "id": "[ADC]/20181209234911.pdf"
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "ip",
          "score": 0,
          "id": "8.253.129.249"
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "shared folder",
          "score": 0,
          "id": "[ADC]/20181209181707.pdf"
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "ip",
          "score": 0,
          "id": "173.222.115.51"
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "shared folder",
          "score": 0,
          "id": "RECRUITING!/\u8d85\u7ea7\u4fa6\u63a2CJZT/associate recruitment"
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "shared folder",
          "score": 0,
          "id": "Ocean Liu/\u8865\u5145\u6750\u6599/\u5168\u9762\u4fe1\u7528\u98ce\u9669\u7ba1\u7406\u7cfb\u5217\u57f9\u8bad\u73ed\u4f18\u79c0\u57f9\u8bad\u9879\u76ee\u7533\u8bf7\u5b66\u5458\u624b\u518c"
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "ip",
          "score": 0,
          "id": "23.33.118.232"
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "shared folder",
          "score": 0,
          "id": "Benefits/125 Benefits/2007 FSA"
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "shared folder",
          "score": 0,
          "id": "Oscar Siu Chi Yeung/jack"
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "ip",
          "score": 0,
          "id": "72.21.81.240"
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "ip",
          "score": 0,
          "id": "8.252.37.254"
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "shared folder",
          "score": 0,
          "id": "Attendance/Audit/IAD's Request"
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "shared folder",
          "score": 0,
          "id": "Benefits/401(k) Forms/Franklin Templeton"
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "shared folder",
          "score": 0,
          "id": "/"
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "department",
          "score": 0,
          "id": "TSD of NYB"
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "shared folder",
          "score": 0,
          "id": "Training Center/2012/5\u6708\u6d59\u5546\u94f6\u884c\u8003\u5bdf\u4ea4\u6d41\u56e2"
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "shared folder",
          "score": 0,
          "id": "[ADC]/20181209224303.pdf"
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "ip",
          "score": 0,
          "id": "23.196.175.12"
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "shared folder",
          "score": 0,
          "id": "[ADC]/20181209181610.pdf"
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "shared folder",
          "score": 0,
          "id": "JC/JC Castillo - Compliance Training/2017 Trainings"
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "shared folder",
          "score": 0,
          "id": "JC/training 2018"
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "shared folder",
          "score": 0,
          "id": "Attendance/Audit/OCC Audit"
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "shared folder",
          "score": 0,
          "id": "Training Center/\u96c6\u56e2\u5185\u57f9\u8bad/2018 Head Office Training Attendees"
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "shared folder",
          "score": 0,
          "id": "Org Chart/Org Chart 2016/OTHER UPDATES"
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "shared folder",
          "score": 0,
          "id": "0-OCC Exam/OCC_2018/Onsite Requests"
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "shared folder",
          "score": 0,
          "id": "JC/JC CFPB Examination Deliverables/reg e electronic fund transfer -"
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "shared folder",
          "score": 0,
          "id": "Jing Zhang/\u6587\u4ef6\u5907\u4efd/0401-0415\u94f6\u884c\u5361\u4e1a\u52a1\u53d1\u5c55\u57f9\u8bad\u73ed"
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "ip",
          "score": 0,
          "id": "13.32.234.178"
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "shared folder",
          "score": 0,
          "id": "Jennifer/Resume Received/resume sent to hr"
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "shared folder",
          "score": 0,
          "id": "QCU/ORD/it risk management"
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "shared folder",
          "score": 0,
          "id": "Job Description/Job descriptions by department/lab - los angeles branch"
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "ip",
          "score": 0,
          "id": "22.232.99.144"
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "ip",
          "score": 0,
          "id": "8.252.28.126"
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "shared folder",
          "score": 0,
          "id": "Lyn/2018 Training/Training Related Records"
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "shared folder",
          "score": 0,
          "id": "Job Description/Job descriptions by department/JD Error"
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "shared folder",
          "score": 0,
          "id": "Benefits/401(k) Forms/Great West"
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "shared folder",
          "score": 0,
          "id": "Annual Party/2017 Party/BOC 2017 GALA PHOTO"
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "ip",
          "score": 0,
          "id": "173.222.113.160"
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "department",
          "score": 0,
          "id": "HRD of NYB"
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "shared folder",
          "score": 0,
          "id": "0Committees/RMICC/july25 2016"
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "ip",
          "score": 0,
          "id": "23.73.148.34"
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "ip",
          "score": 0,
          "id": "40.77.231.3"
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "shared folder",
          "score": 0,
          "id": "Bettina/cap jd/2017 jd"
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "shared folder",
          "score": 0,
          "id": "[ADC]/20181209182805.pdf"
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "shared folder",
          "score": 0,
          "id": "0-OCC Exam/OCC_2017/2017 OCC Annual Safety and Soundness Examination"
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "shared folder",
          "score": 0,
          "id": "Attendance/Audit/Other Dept audit req"
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "shared folder",
          "score": 0,
          "id": "Training Center/\u603b\u884cNOTES \u901a\u77e5\u8981\u6c42\u7b49/20180625 \u5168\u5458\u53cd\u6d17\u94b1\u57f9\u8bad\u7edf\u8ba1"
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "shared folder",
          "score": 0,
          "id": "Team Logistic/Prior Staff/~$mrd-departmental staffing gap analysis.xlsx\uecf0"
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "shared folder",
          "score": 0,
          "id": "Training Center/2015/1-10-16 to 1-29-16\u7f51\u7edc\u94f6\u884c\u6218\u7565\u4e13\u9898\u57f9\u8bad\u73ed"
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "shared folder",
          "score": 0,
          "id": "Team Logistic/Prior Staff/mrd-performance.xlsx\uecf0"
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "ip",
          "score": 0,
          "id": "8.253.130.254"
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "shared folder",
          "score": 0,
          "id": "IAD/Quarterly Continuous Monitoring/q1 2017"
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "ip",
          "score": 0,
          "id": "8.249.47.254"
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "ip",
          "score": 0,
          "id": "8.253.129.204"
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "shared folder",
          "score": 0,
          "id": "Turnover Report/~$employee turn over report.xlsx"
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "shared folder",
          "score": 0,
          "id": "RECRUITMENT TEAM 2017/Consultant Recruiters/Grace"
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "ip",
          "score": 0,
          "id": "8.249.43.254"
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "user",
          "score": 9,
          "id": "DCWONG"
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "shared folder",
          "score": 0,
          "id": "Attendance/Audit/KPMG"
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "shared folder",
          "score": 0,
          "id": "Personal Folders/Victor Lee/Move Part 2"
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "shared folder",
          "score": 0,
          "id": "[ADC]/20181209181754.pdf"
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "ip",
          "score": 0,
          "id": "8.252.66.126"
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "shared folder",
          "score": 0,
          "id": "RECRUITMENT TEAM 2017/Consultant Management/New Consultant Management Project"
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "shared folder",
          "score": 0,
          "id": "0Committees/CAC/may 29, 2018"
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "ip",
          "score": 0,
          "id": "13.78.186.254"
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "shared folder",
          "score": 0,
          "id": "Org Chart/Org Chart 2016/march"
        },
        {
          "num_anomalies": 1,
          "severity": 3,
          "num_alerts": 6,
          "label": "ip",
          "score": 155,
          "id": "22.232.210.16"
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "ip",
          "score": 0,
          "id": "8.252.38.126"
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "ip",
          "score": 0,
          "id": "198.70.66.50"
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "shared folder",
          "score": 0,
          "id": "Jennifer/Resume Received/Resume sent to HR"
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "shared folder",
          "score": 0,
          "id": "0Committees/CAC/August 7, 2018"
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "shared folder",
          "score": 0,
          "id": "Benefits/vsp vision"
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "shared folder",
          "score": 0,
          "id": "Team Logistic/Prior Staff/~$mrd-departmental staffing gap analysis.xlsx"
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "shared folder",
          "score": 0,
          "id": "HR Forms/Old Forms/hr forms for usi website"
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "shared folder",
          "score": 0,
          "id": "[ADC]/20181209164701.pdf"
        },
        {
          "num_anomalies": 1,
          "severity": 3,
          "num_alerts": 12,
          "label": "ip",
          "score": 128,
          "id": "22.232.9.79"
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "ip",
          "score": 0,
          "id": "8.252.18.254"
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "shared folder",
          "score": 0,
          "id": "HR Memo/HR Major Events "
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "shared folder",
          "score": 0,
          "id": "JC/Training 2018/New Hire Training Session"
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "shared folder",
          "score": 0,
          "id": "Team Logistic/Prior Staff/mrd-performance.xlsx"
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "shared folder",
          "score": 0,
          "id": "0Committees/CAC/November 1, 2018"
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "shared folder",
          "score": 0,
          "id": "Attendance/Audit/Ernst "
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "ip",
          "score": 0,
          "id": "203.119.95.53"
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "shared folder",
          "score": 0,
          "id": "Lyn/BOC 2019 Annual Party/z"
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "shared folder",
          "score": 0,
          "id": "Team Logistic/Prior Staff/~$mrd-performance.xlsx\uecf0"
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "shared folder",
          "score": 0,
          "id": "0Committees/CAC/May 22, 2018"
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "shared folder",
          "score": 0,
          "id": "[ADC]/20181209181633.pdf"
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "shared folder",
          "score": 0,
          "id": "Attendance/Payroll Report/2010"
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "department",
          "score": 0,
          "id": "BDD of LAB"
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "ip",
          "score": 0,
          "id": "198.70.66.9"
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "department",
          "score": 0,
          "id": "Other"
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "shared folder",
          "score": 0,
          "id": "Turnover Report/employee turn over report.xlsx:zone.identifier"
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "shared folder",
          "score": 0,
          "id": "Jack Qiu/transfer"
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "shared folder",
          "score": 0,
          "id": "Training Center/\u96c6\u56e2\u5185\u57f9\u8bad/2017 Head Office Training Attendees"
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "shared folder",
          "score": 0,
          "id": "Turnover Report/employee turn over report.xlsx\uecf0"
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "ip",
          "score": 0,
          "id": "96.7.198.96"
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "shared folder",
          "score": 0,
          "id": "2016 Heightened Standards/1- occ heightened standards"
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "shared folder",
          "score": 0,
          "id": "1-Liquidity Risk Oversight/eps"
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "shared folder",
          "score": 0,
          "id": "QCU/ORD/turnover rate"
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "ip",
          "score": 0,
          "id": "8.251.15.254"
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "shared folder",
          "score": 0,
          "id": "1-Liquidity Risk Oversight/EPS/2052a"
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "shared folder",
          "score": 0,
          "id": "Team Logistic/Prior Staff/mrd-performance.xlsx:zone.identifier"
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "shared folder",
          "score": 0,
          "id": "Personal Folders/Xiaohui/2017"
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "shared folder",
          "score": 0,
          "id": "[ADC]/20181209232214.pdf"
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "shared folder",
          "score": 0,
          "id": "[ADC]/20181209181816.pdf"
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "shared folder",
          "score": 0,
          "id": "Org Chart/Org Chart 2014/With Photos"
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "ip",
          "score": 0,
          "id": "8.249.45.254"
        },
        {
          "num_anomalies": 1,
          "severity": 3,
          "num_alerts": 5,
          "label": "ip",
          "score": 154,
          "id": "22.234.40.23"
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "shared folder",
          "score": 0,
          "id": "Training Center/2018/1014-1026 \u5883\u5916\u76d1\u7ba1\u6cd5\u6848\u53ca\u5168\u7403\u5e02\u573a\u4e1a\u52a1\u4ea7\u54c1\u5408\u89c4\u57f9\u8bad\u73ed"
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "shared folder",
          "score": 0,
          "id": "Team Logistic/Prior Staff/mrd-departmental staffing gap analysis.xlsx"
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "shared folder",
          "score": 0,
          "id": "BOC Training/2018/Records"
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "shared folder",
          "score": 0,
          "id": "BOC Training/2017/Training Records"
        },
        {
          "num_anomalies": 1,
          "severity": 3,
          "num_alerts": 8,
          "label": "ip",
          "score": 198,
          "id": "22.72.1.199"
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "shared folder",
          "score": 0,
          "id": "Team Logistic/Prior Staff/~$mrd-performance.xlsx"
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "ip",
          "score": 0,
          "id": "65.55.44.108"
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "shared folder",
          "score": 0,
          "id": "0-HS Projects/RiskMetrics_KRI/opsrisk"
        },
        {
          "num_anomalies": 1,
          "severity": 3,
          "num_alerts": 2,
          "label": "ip",
          "score": 197,
          "id": "22.31.66.17"
        },
        {
          "num_anomalies": 1,
          "severity": 3,
          "num_alerts": 10,
          "label": "ip",
          "score": 144,
          "id": "22.232.210.65"
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "ip",
          "score": 0,
          "id": "8.253.129.121"
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "shared folder",
          "score": 0,
          "id": "Cissy/ppt\u7d20\u6750"
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "ip",
          "score": 0,
          "id": "23.4.43.27"
        },
        {
          "num_anomalies": 1,
          "severity": 3,
          "num_alerts": 2,
          "label": "ip",
          "score": 170,
          "id": "22.232.98.225"
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "shared folder",
          "score": 0,
          "id": "0Committees/ORC/2017"
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "department",
          "score": 0,
          "id": "12th_floor "
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "shared folder",
          "score": 0,
          "id": "Leona Liu/Empty/Empty"
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "shared folder",
          "score": 0,
          "id": "Job Description/2017 Job Description/word docs from dianna"
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "ip",
          "score": 0,
          "id": "23.14.181.100"
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "ip",
          "score": 0,
          "id": "8.251.11.254"
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "department",
          "score": 0,
          "id": "Printer"
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "ip",
          "score": 0,
          "id": "13.78.168.230"
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "shared folder",
          "score": 0,
          "id": "Notes Pure Client/Lotus/Notes"
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "shared folder",
          "score": 0,
          "id": "1-Operational Risk/New Product/ir swap_xccy swap"
        },
        {
          "num_anomalies": 0,
          "severity": 0,
          "num_alerts": 0,
          "label": "ip",
          "score": 0,
          "id": "8.252.67.254"
        }
      ],
      "links": [
        {
          "source": "DCWONG",
          "label": "own",
          "id": "own-DCWONG-21.232.98.32",
          "target": "21.232.98.32"
        },
        {
          "source": "JCGE",
          "label": "own",
          "id": "own-JCGE-22.232.9.79",
          "target": "22.232.9.79"
        },
        {
          "source": "22.232.210.65",
          "label": "access",
          "id": "22.232.210.65-72.21.81.240",
          "target": "72.21.81.240"
        },
        {
          "source": "22.232.210.65",
          "label": "access",
          "id": "22.232.210.65-198.70.66.50",
          "target": "198.70.66.50"
        },
        {
          "source": "22.232.210.65",
          "label": "access",
          "id": "22.232.210.65-198.70.66.9",
          "target": "198.70.66.9"
        },
        {
          "source": "22.31.66.17",
          "label": "access",
          "id": "22.31.66.17-21.232.101.51",
          "target": "21.232.101.51"
        },
        {
          "source": "21.232.98.32",
          "label": "within",
          "id": "within-21.232.98.32-HRD of NYB",
          "target": "HRD of NYB"
        },
        {
          "source": "22.232.98.225",
          "label": "within",
          "id": "within-22.232.98.225-12th_floor ",
          "target": "12th_floor "
        },
        {
          "source": "22.232.64.117",
          "label": "within",
          "id": "within-22.232.64.117-Other",
          "target": "Other"
        },
        {
          "source": "22.31.66.17",
          "label": "within",
          "id": "within-22.31.66.17-Other",
          "target": "Other"
        },
        {
          "source": "22.234.40.23",
          "label": "within",
          "id": "within-22.234.40.23-Other",
          "target": "Other"
        },
        {
          "source": "22.232.210.65",
          "label": "within",
          "id": "within-22.232.210.65-Other",
          "target": "Other"
        },
        {
          "source": "22.232.210.16",
          "label": "within",
          "id": "within-22.232.210.16-Other",
          "target": "Other"
        },
        {
          "source": "JCGE",
          "label": "within",
          "id": "within-JCGE-BDD of LAB",
          "target": "BDD of LAB"
        },
        {
          "source": "DCWONG",
          "label": "within",
          "id": "within-DCWONG-HRD of NYB",
          "target": "HRD of NYB"
        },
        {
          "source": "22.232.9.79",
          "label": "within",
          "id": "within-22.232.9.79-BDD of LAB",
          "target": "BDD of LAB"
        },
        {
          "source": "22.72.1.199",
          "label": "within",
          "id": "within-22.72.1.199-Other",
          "target": "Other"
        },
        {
          "source": "21.232.101.51",
          "label": "within",
          "id": "within-21.232.101.51-TSD of NYB",
          "target": "TSD of NYB"
        },
        {
          "source": "21.232.110.18",
          "label": "within",
          "id": "within-21.232.110.18-Printer",
          "target": "Printer"
        },
        {
          "source": "22.72.1.199",
          "label": "access",
          "id": "22.72.1.199-22.232.101.164",
          "target": "22.232.101.164"
        },
        {
          "source": "22.72.1.199",
          "label": "access",
          "id": "22.72.1.199-22.232.97.190",
          "target": "22.232.97.190"
        },
        {
          "source": "21.232.110.18",
          "label": "access",
          "id": "21.232.110.18-[ADC]/20181209232214.pdf",
          "target": "[ADC]/20181209232214.pdf"
        },
        {
          "source": "21.232.110.18",
          "label": "access",
          "id": "21.232.110.18-[ADC]/20181209182805.pdf",
          "target": "[ADC]/20181209182805.pdf"
        },
        {
          "source": "21.232.110.18",
          "label": "access",
          "id": "21.232.110.18-[ADC]/20181209181816.pdf",
          "target": "[ADC]/20181209181816.pdf"
        },
        {
          "source": "21.232.110.18",
          "label": "access",
          "id": "21.232.110.18-[ADC]/20181209164701.pdf",
          "target": "[ADC]/20181209164701.pdf"
        },
        {
          "source": "21.232.110.18",
          "label": "access",
          "id": "21.232.110.18-[ADC]/20181209234911.pdf",
          "target": "[ADC]/20181209234911.pdf"
        },
        {
          "source": "21.232.110.18",
          "label": "access",
          "id": "21.232.110.18-[ADC]/20181209192448.pdf",
          "target": "[ADC]/20181209192448.pdf"
        },
        {
          "source": "21.232.110.18",
          "label": "access",
          "id": "21.232.110.18-[ADC]/20181209181610.pdf",
          "target": "[ADC]/20181209181610.pdf"
        },
        {
          "source": "21.232.110.18",
          "label": "access",
          "id": "21.232.110.18-[ADC]/20181209181633.pdf",
          "target": "[ADC]/20181209181633.pdf"
        },
        {
          "source": "21.232.110.18",
          "label": "access",
          "id": "21.232.110.18-[ADC]/20181209181707.pdf",
          "target": "[ADC]/20181209181707.pdf"
        },
        {
          "source": "21.232.110.18",
          "label": "access",
          "id": "21.232.110.18-[ADC]/20181209181730.pdf",
          "target": "[ADC]/20181209181730.pdf"
        },
        {
          "source": "21.232.110.18",
          "label": "access",
          "id": "21.232.110.18-[ADC]/20181209185231.pdf",
          "target": "[ADC]/20181209185231.pdf"
        },
        {
          "source": "21.232.110.18",
          "label": "access",
          "id": "21.232.110.18-[ADC]/20181209224303.pdf",
          "target": "[ADC]/20181209224303.pdf"
        },
        {
          "source": "21.232.110.18",
          "label": "access",
          "id": "21.232.110.18-[ADC]/20181209181754.pdf",
          "target": "[ADC]/20181209181754.pdf"
        },
        {
          "source": "21.232.110.18",
          "label": "access",
          "id": "21.232.110.18-[ADC]/20181209181835.pdf",
          "target": "[ADC]/20181209181835.pdf"
        },
        {
          "source": "22.234.40.23",
          "label": "access",
          "id": "22.234.40.23-22.232.99.144",
          "target": "22.232.99.144"
        },
        {
          "source": "22.232.9.79",
          "label": "access",
          "id": "22.232.9.79-203.119.95.53",
          "target": "203.119.95.53"
        },
        {
          "source": "22.232.9.79",
          "label": "access",
          "id": "22.232.9.79-23.54.187.27",
          "target": "23.54.187.27"
        },
        {
          "source": "22.232.9.79",
          "label": "access",
          "id": "22.232.9.79-40.67.186.102",
          "target": "40.67.186.102"
        },
        {
          "source": "22.232.9.79",
          "label": "access",
          "id": "22.232.9.79-23.4.43.27",
          "target": "23.4.43.27"
        },
        {
          "source": "22.232.98.225",
          "label": "access",
          "id": "22.232.98.225-Team Logistic/prior staff",
          "target": "Team Logistic/prior staff"
        },
        {
          "source": "22.232.98.225",
          "label": "access",
          "id": "22.232.98.225-Team Logistic/Prior Staff/~$mrd-departmental staffing gap analysis.xlsx\uecf0",
          "target": "Team Logistic/Prior Staff/~$mrd-departmental staffing gap analysis.xlsx\uecf0"
        },
        {
          "source": "22.232.98.225",
          "label": "access",
          "id": "22.232.98.225-0-OCC Exam/OCC_2018/2018 OCC Annual Safety and Soundness Examination",
          "target": "0-OCC Exam/OCC_2018/2018 OCC Annual Safety and Soundness Examination"
        },
        {
          "source": "22.232.98.225",
          "label": "access",
          "id": "22.232.98.225-Personal Folders/Ying Ping/annual report",
          "target": "Personal Folders/Ying Ping/annual report"
        },
        {
          "source": "22.232.98.225",
          "label": "access",
          "id": "22.232.98.225-Team Logistic/Prior Staff/mrd-performance.xlsx\uecf0",
          "target": "Team Logistic/Prior Staff/mrd-performance.xlsx\uecf0"
        },
        {
          "source": "22.232.98.225",
          "label": "access",
          "id": "22.232.98.225-Team Logistic/Prior Staff/~$mrd-performance.xlsx",
          "target": "Team Logistic/Prior Staff/~$mrd-performance.xlsx"
        },
        {
          "source": "22.232.98.225",
          "label": "access",
          "id": "22.232.98.225-Team Logistic/Prior Staff/mrd-departmental staffing gap analysis.xlsx:zone.identifier",
          "target": "Team Logistic/Prior Staff/mrd-departmental staffing gap analysis.xlsx:zone.identifier"
        },
        {
          "source": "22.232.98.225",
          "label": "access",
          "id": "22.232.98.225-0-OCC Exam/OCC_2017/2017 OCC Annual Safety and Soundness Examination",
          "target": "0-OCC Exam/OCC_2017/2017 OCC Annual Safety and Soundness Examination"
        },
        {
          "source": "22.232.98.225",
          "label": "access",
          "id": "22.232.98.225-0-OCC Exam/OCC_2018/Onsite Requests",
          "target": "0-OCC Exam/OCC_2018/Onsite Requests"
        },
        {
          "source": "22.232.98.225",
          "label": "access",
          "id": "22.232.98.225-Team Logistic/Prior Staff/~$mrd-departmental staffing gap analysis.xlsx",
          "target": "Team Logistic/Prior Staff/~$mrd-departmental staffing gap analysis.xlsx"
        },
        {
          "source": "22.232.98.225",
          "label": "access",
          "id": "22.232.98.225-Team Logistic/Prior Staff/mrd-departmental staffing gap analysis.xlsx",
          "target": "Team Logistic/Prior Staff/mrd-departmental staffing gap analysis.xlsx"
        },
        {
          "source": "22.232.98.225",
          "label": "access",
          "id": "22.232.98.225-0Committees/CAC/August 7, 2018",
          "target": "0Committees/CAC/August 7, 2018"
        },
        {
          "source": "22.232.98.225",
          "label": "access",
          "id": "22.232.98.225-0Committees/CAC/april 11, 2018",
          "target": "0Committees/CAC/april 11, 2018"
        },
        {
          "source": "22.232.98.225",
          "label": "access",
          "id": "22.232.98.225-0Committees/CAC/may 29, 2018",
          "target": "0Committees/CAC/may 29, 2018"
        },
        {
          "source": "22.232.98.225",
          "label": "access",
          "id": "22.232.98.225-1-Liquidity Risk Oversight/EPS/Operational Deposit",
          "target": "1-Liquidity Risk Oversight/EPS/Operational Deposit"
        },
        {
          "source": "22.232.98.225",
          "label": "access",
          "id": "22.232.98.225-Personal Folders/Victor Lee/Prior to Move",
          "target": "Personal Folders/Victor Lee/Prior to Move"
        },
        {
          "source": "22.232.98.225",
          "label": "access",
          "id": "22.232.98.225-1-Operational Risk/New Product/ir swap_xccy swap",
          "target": "1-Operational Risk/New Product/ir swap_xccy swap"
        },
        {
          "source": "22.232.98.225",
          "label": "access",
          "id": "22.232.98.225-0Committees/RMICC/july25 2016",
          "target": "0Committees/RMICC/july25 2016"
        },
        {
          "source": "22.232.98.225",
          "label": "access",
          "id": "22.232.98.225-0-HS Projects/RiskMetrics_KRI/opsrisk",
          "target": "0-HS Projects/RiskMetrics_KRI/opsrisk"
        },
        {
          "source": "22.232.98.225",
          "label": "access",
          "id": "22.232.98.225-0Committees/CAC/November 1, 2018",
          "target": "0Committees/CAC/November 1, 2018"
        },
        {
          "source": "22.232.98.225",
          "label": "access",
          "id": "22.232.98.225-Team Logistic/Prior Staff/~$mrd-performance.xlsx\uecf0",
          "target": "Team Logistic/Prior Staff/~$mrd-performance.xlsx\uecf0"
        },
        {
          "source": "22.232.98.225",
          "label": "access",
          "id": "22.232.98.225-IAD/Quarterly Continuous Monitoring/q1 2017",
          "target": "IAD/Quarterly Continuous Monitoring/q1 2017"
        },
        {
          "source": "22.232.98.225",
          "label": "access",
          "id": "22.232.98.225-1-liquidity risk oversight/eps/operational deposit",
          "target": "1-liquidity risk oversight/eps/operational deposit"
        },
        {
          "source": "22.232.98.225",
          "label": "access",
          "id": "22.232.98.225-Personal Folders/Xiaohui/2017",
          "target": "Personal Folders/Xiaohui/2017"
        },
        {
          "source": "22.232.98.225",
          "label": "access",
          "id": "22.232.98.225-1-Liquidity Risk Oversight/EPS/2052a",
          "target": "1-Liquidity Risk Oversight/EPS/2052a"
        },
        {
          "source": "22.232.98.225",
          "label": "access",
          "id": "22.232.98.225-0Committees/CAC/May 22, 2018",
          "target": "0Committees/CAC/May 22, 2018"
        },
        {
          "source": "22.232.98.225",
          "label": "access",
          "id": "22.232.98.225-0Committees/ORC/2017",
          "target": "0Committees/ORC/2017"
        },
        {
          "source": "22.232.98.225",
          "label": "access",
          "id": "22.232.98.225-Team Logistic/Prior Staff/mrd-performance.xlsx:zone.identifier",
          "target": "Team Logistic/Prior Staff/mrd-performance.xlsx:zone.identifier"
        },
        {
          "source": "22.232.98.225",
          "label": "access",
          "id": "22.232.98.225-Team Logistic/Prior Staff/mrd-performance.xlsx",
          "target": "Team Logistic/Prior Staff/mrd-performance.xlsx"
        },
        {
          "source": "22.232.98.225",
          "label": "access",
          "id": "22.232.98.225-Team Logistic/Prior Staff/mrd-departmental staffing gap analysis.xlsx\uecf0",
          "target": "Team Logistic/Prior Staff/mrd-departmental staffing gap analysis.xlsx\uecf0"
        },
        {
          "source": "22.232.98.225",
          "label": "access",
          "id": "22.232.98.225-1-Liquidity Risk Oversight/eps",
          "target": "1-Liquidity Risk Oversight/eps"
        },
        {
          "source": "22.232.98.225",
          "label": "access",
          "id": "22.232.98.225-Personal Folders/Victor Lee/Move Part 2",
          "target": "Personal Folders/Victor Lee/Move Part 2"
        },
        {
          "source": "21.232.98.32",
          "label": "access",
          "id": "21.232.98.32-Attendance/Audit/Other Dept audit req",
          "target": "Attendance/Audit/Other Dept audit req"
        },
        {
          "source": "21.232.98.32",
          "label": "access",
          "id": "21.232.98.32-Oscar Siu Chi Yeung/jack",
          "target": "Oscar Siu Chi Yeung/jack"
        },
        {
          "source": "21.232.98.32",
          "label": "access",
          "id": "21.232.98.32-QCU/ORD/it risk management",
          "target": "QCU/ORD/it risk management"
        },
        {
          "source": "21.232.98.32",
          "label": "access",
          "id": "21.232.98.32-JC/my trainings",
          "target": "JC/my trainings"
        },
        {
          "source": "21.232.98.32",
          "label": "access",
          "id": "21.232.98.32-Junpeng Yang/BAI/issues",
          "target": "Junpeng Yang/BAI/issues"
        },
        {
          "source": "21.232.98.32",
          "label": "access",
          "id": "21.232.98.32-RAINCOLE/TU YUAN/ACH Updated",
          "target": "RAINCOLE/TU YUAN/ACH Updated"
        },
        {
          "source": "21.232.98.32",
          "label": "access",
          "id": "21.232.98.32-Turnover Report/employee turn over report.xlsx\uecf0",
          "target": "Turnover Report/employee turn over report.xlsx\uecf0"
        },
        {
          "source": "21.232.98.32",
          "label": "access",
          "id": "21.232.98.32-Employees' Guide/2005/employees' guide (revised 12-2005)",
          "target": "Employees' Guide/2005/employees' guide (revised 12-2005)"
        },
        {
          "source": "21.232.98.32",
          "label": "access",
          "id": "21.232.98.32-/",
          "target": "/"
        },
        {
          "source": "21.232.98.32",
          "label": "access",
          "id": "21.232.98.32-QCU/ORD/turnover rate",
          "target": "QCU/ORD/turnover rate"
        },
        {
          "source": "21.232.98.32",
          "label": "access",
          "id": "21.232.98.32-Benefits/401(k) Forms/Great West",
          "target": "Benefits/401(k) Forms/Great West"
        },
        {
          "source": "21.232.98.32",
          "label": "access",
          "id": "21.232.98.32-HR Forms/Old Forms/hr forms for usi website",
          "target": "HR Forms/Old Forms/hr forms for usi website"
        },
        {
          "source": "21.232.98.32",
          "label": "access",
          "id": "21.232.98.32-Benefits/vsp vision",
          "target": "Benefits/vsp vision"
        },
        {
          "source": "21.232.98.32",
          "label": "access",
          "id": "21.232.98.32-Org Chart/Org Chart 2016/OTHER UPDATES",
          "target": "Org Chart/Org Chart 2016/OTHER UPDATES"
        },
        {
          "source": "21.232.98.32",
          "label": "access",
          "id": "21.232.98.32-Attendance/Audit/Ernst ",
          "target": "Attendance/Audit/Ernst "
        },
        {
          "source": "21.232.98.32",
          "label": "access",
          "id": "21.232.98.32-JC/JC CFPB Examination Deliverables/reg e electronic fund transfer -",
          "target": "JC/JC CFPB Examination Deliverables/reg e electronic fund transfer -"
        },
        {
          "source": "21.232.98.32",
          "label": "access",
          "id": "21.232.98.32-RECRUITMENT TEAM 2017/Consultant Management/New Consultant Management Project",
          "target": "RECRUITMENT TEAM 2017/Consultant Management/New Consultant Management Project"
        },
        {
          "source": "21.232.98.32",
          "label": "access",
          "id": "21.232.98.32-Training Center/2012/5\u6708\u6d59\u5546\u94f6\u884c\u8003\u5bdf\u4ea4\u6d41\u56e2",
          "target": "Training Center/2012/5\u6708\u6d59\u5546\u94f6\u884c\u8003\u5bdf\u4ea4\u6d41\u56e2"
        },
        {
          "source": "21.232.98.32",
          "label": "access",
          "id": "21.232.98.32-Attendance/Audit/KPMG",
          "target": "Attendance/Audit/KPMG"
        },
        {
          "source": "21.232.98.32",
          "label": "access",
          "id": "21.232.98.32-Cissy/ppt\u7d20\u6750",
          "target": "Cissy/ppt\u7d20\u6750"
        },
        {
          "source": "21.232.98.32",
          "label": "access",
          "id": "21.232.98.32-Benefits/401(k) Forms/Franklin Templeton",
          "target": "Benefits/401(k) Forms/Franklin Templeton"
        },
        {
          "source": "21.232.98.32",
          "label": "access",
          "id": "21.232.98.32-Notes Pure Client/Lotus/Notes",
          "target": "Notes Pure Client/Lotus/Notes"
        },
        {
          "source": "21.232.98.32",
          "label": "access",
          "id": "21.232.98.32-RECRUITING!/internal recruitment",
          "target": "RECRUITING!/internal recruitment"
        },
        {
          "source": "21.232.98.32",
          "label": "access",
          "id": "21.232.98.32-JC/BAI Account Revisions/deactivated accounts",
          "target": "JC/BAI Account Revisions/deactivated accounts"
        },
        {
          "source": "21.232.98.32",
          "label": "access",
          "id": "21.232.98.32-JC/JC Castillo - Compliance Training/2017 Trainings",
          "target": "JC/JC Castillo - Compliance Training/2017 Trainings"
        },
        {
          "source": "21.232.98.32",
          "label": "access",
          "id": "21.232.98.32-JC/Training 2018/rmd's replacement for training",
          "target": "JC/Training 2018/rmd's replacement for training"
        },
        {
          "source": "21.232.98.32",
          "label": "access",
          "id": "21.232.98.32-Turnover Report/employee turn over report.xlsx",
          "target": "Turnover Report/employee turn over report.xlsx"
        },
        {
          "source": "21.232.98.32",
          "label": "access",
          "id": "21.232.98.32-Job Description/2006-06 Job Description/act",
          "target": "Job Description/2006-06 Job Description/act"
        },
        {
          "source": "21.232.98.32",
          "label": "access",
          "id": "21.232.98.32-QCU/ORD/Turnover Rate",
          "target": "QCU/ORD/Turnover Rate"
        },
        {
          "source": "21.232.98.32",
          "label": "access",
          "id": "21.232.98.32-Training Center/\u603b\u884cNOTES \u901a\u77e5\u8981\u6c42\u7b49/20180625 \u5168\u5458\u53cd\u6d17\u94b1\u57f9\u8bad\u7edf\u8ba1",
          "target": "Training Center/\u603b\u884cNOTES \u901a\u77e5\u8981\u6c42\u7b49/20180625 \u5168\u5458\u53cd\u6d17\u94b1\u57f9\u8bad\u7edf\u8ba1"
        },
        {
          "source": "21.232.98.32",
          "label": "access",
          "id": "21.232.98.32-2016 Heightened Standards/1- occ heightened standards",
          "target": "2016 Heightened Standards/1- occ heightened standards"
        },
        {
          "source": "21.232.98.32",
          "label": "access",
          "id": "21.232.98.32-RECRUITING!/\u8d85\u7ea7\u4fa6\u63a2CJZT/associate recruitment",
          "target": "RECRUITING!/\u8d85\u7ea7\u4fa6\u63a2CJZT/associate recruitment"
        },
        {
          "source": "21.232.98.32",
          "label": "access",
          "id": "21.232.98.32-Leona Liu/Empty/Empty",
          "target": "Leona Liu/Empty/Empty"
        },
        {
          "source": "21.232.98.32",
          "label": "access",
          "id": "21.232.98.32-HR Forms/Employment/New Hire Forms",
          "target": "HR Forms/Employment/New Hire Forms"
        },
        {
          "source": "21.232.98.32",
          "label": "access",
          "id": "21.232.98.32-RECRUITMENT TEAM 2017/Consultant Recruiters/Grace",
          "target": "RECRUITMENT TEAM 2017/Consultant Recruiters/Grace"
        },
        {
          "source": "21.232.98.32",
          "label": "access",
          "id": "21.232.98.32-Attendance/Audit/CFPB",
          "target": "Attendance/Audit/CFPB"
        },
        {
          "source": "21.232.98.32",
          "label": "access",
          "id": "21.232.98.32-HR Memo/HR Major Events ",
          "target": "HR Memo/HR Major Events "
        },
        {
          "source": "21.232.98.32",
          "label": "access",
          "id": "21.232.98.32-Job Description/Job descriptions by department/lab - los angeles branch",
          "target": "Job Description/Job descriptions by department/lab - los angeles branch"
        },
        {
          "source": "21.232.98.32",
          "label": "access",
          "id": "21.232.98.32-RAINCOLE/TU YUAN/Billing",
          "target": "RAINCOLE/TU YUAN/Billing"
        },
        {
          "source": "21.232.98.32",
          "label": "access",
          "id": "21.232.98.32-JC/Training 2018/New Hire Training Session",
          "target": "JC/Training 2018/New Hire Training Session"
        },
        {
          "source": "21.232.98.32",
          "label": "access",
          "id": "21.232.98.32-Training Center/\u96c6\u56e2\u5185\u57f9\u8bad/2018 Head Office Training Attendees",
          "target": "Training Center/\u96c6\u56e2\u5185\u57f9\u8bad/2018 Head Office Training Attendees"
        },
        {
          "source": "21.232.98.32",
          "label": "access",
          "id": "21.232.98.32-Lyn/2018 Training/Training Related Records",
          "target": "Lyn/2018 Training/Training Related Records"
        },
        {
          "source": "21.232.98.32",
          "label": "access",
          "id": "21.232.98.32-Junpeng Yang/Saba - Related/From Lyn",
          "target": "Junpeng Yang/Saba - Related/From Lyn"
        },
        {
          "source": "21.232.98.32",
          "label": "access",
          "id": "21.232.98.32-Lyn/BOC 2019 Annual Party/z",
          "target": "Lyn/BOC 2019 Annual Party/z"
        },
        {
          "source": "21.232.98.32",
          "label": "access",
          "id": "21.232.98.32-Training Center/\u96c6\u56e2\u5185\u57f9\u8bad/2017 Head Office Training Attendees",
          "target": "Training Center/\u96c6\u56e2\u5185\u57f9\u8bad/2017 Head Office Training Attendees"
        },
        {
          "source": "21.232.98.32",
          "label": "access",
          "id": "21.232.98.32-Ocean Liu/\u8865\u5145\u6750\u6599/\u5168\u9762\u4fe1\u7528\u98ce\u9669\u7ba1\u7406\u7cfb\u5217\u57f9\u8bad\u73ed\u4f18\u79c0\u57f9\u8bad\u9879\u76ee\u7533\u8bf7\u5b66\u5458\u624b\u518c",
          "target": "Ocean Liu/\u8865\u5145\u6750\u6599/\u5168\u9762\u4fe1\u7528\u98ce\u9669\u7ba1\u7406\u7cfb\u5217\u57f9\u8bad\u73ed\u4f18\u79c0\u57f9\u8bad\u9879\u76ee\u7533\u8bf7\u5b66\u5458\u624b\u518c"
        },
        {
          "source": "21.232.98.32",
          "label": "access",
          "id": "21.232.98.32-Jack Qiu/transfer",
          "target": "Jack Qiu/transfer"
        },
        {
          "source": "21.232.98.32",
          "label": "access",
          "id": "21.232.98.32-Attendance/Audit/IAD's Request",
          "target": "Attendance/Audit/IAD's Request"
        },
        {
          "source": "21.232.98.32",
          "label": "access",
          "id": "21.232.98.32-JC/training 2018",
          "target": "JC/training 2018"
        },
        {
          "source": "21.232.98.32",
          "label": "access",
          "id": "21.232.98.32-Jennifer/Resume Received/resume sent to hr",
          "target": "Jennifer/Resume Received/resume sent to hr"
        },
        {
          "source": "21.232.98.32",
          "label": "access",
          "id": "21.232.98.32-Bettina/cap jd/2017 jd",
          "target": "Bettina/cap jd/2017 jd"
        },
        {
          "source": "21.232.98.32",
          "label": "access",
          "id": "21.232.98.32-Benefits/125 Benefits/2007 FSA",
          "target": "Benefits/125 Benefits/2007 FSA"
        },
        {
          "source": "21.232.98.32",
          "label": "access",
          "id": "21.232.98.32-QCU/ord",
          "target": "QCU/ord"
        },
        {
          "source": "21.232.98.32",
          "label": "access",
          "id": "21.232.98.32-BOC Training/2018/Records",
          "target": "BOC Training/2018/Records"
        },
        {
          "source": "21.232.98.32",
          "label": "access",
          "id": "21.232.98.32-Jing Zhang/\u6587\u4ef6\u5907\u4efd/0401-0415\u94f6\u884c\u5361\u4e1a\u52a1\u53d1\u5c55\u57f9\u8bad\u73ed",
          "target": "Jing Zhang/\u6587\u4ef6\u5907\u4efd/0401-0415\u94f6\u884c\u5361\u4e1a\u52a1\u53d1\u5c55\u57f9\u8bad\u73ed"
        },
        {
          "source": "21.232.98.32",
          "label": "access",
          "id": "21.232.98.32-Attendance/Payroll Report/2010",
          "target": "Attendance/Payroll Report/2010"
        },
        {
          "source": "21.232.98.32",
          "label": "access",
          "id": "21.232.98.32-Lyn/Training lyn/lyn adc",
          "target": "Lyn/Training lyn/lyn adc"
        },
        {
          "source": "21.232.98.32",
          "label": "access",
          "id": "21.232.98.32-Turnover Report/~$employee turn over report.xlsx",
          "target": "Turnover Report/~$employee turn over report.xlsx"
        },
        {
          "source": "21.232.98.32",
          "label": "access",
          "id": "21.232.98.32-Org Chart/Org Chart 2016/march",
          "target": "Org Chart/Org Chart 2016/march"
        },
        {
          "source": "21.232.98.32",
          "label": "access",
          "id": "21.232.98.32-Third Party Vendor Management/Very High/WageWorks",
          "target": "Third Party Vendor Management/Very High/WageWorks"
        },
        {
          "source": "21.232.98.32",
          "label": "access",
          "id": "21.232.98.32-Attendance/Audit/OCC Audit",
          "target": "Attendance/Audit/OCC Audit"
        },
        {
          "source": "21.232.98.32",
          "label": "access",
          "id": "21.232.98.32-Training Center/2015/1-10-16 to 1-29-16\u7f51\u7edc\u94f6\u884c\u6218\u7565\u4e13\u9898\u57f9\u8bad\u73ed",
          "target": "Training Center/2015/1-10-16 to 1-29-16\u7f51\u7edc\u94f6\u884c\u6218\u7565\u4e13\u9898\u57f9\u8bad\u73ed"
        },
        {
          "source": "21.232.98.32",
          "label": "access",
          "id": "21.232.98.32-JC/JC Castillo - Compliance Training/Vendor List ",
          "target": "JC/JC Castillo - Compliance Training/Vendor List "
        },
        {
          "source": "21.232.98.32",
          "label": "access",
          "id": "21.232.98.32-jc/training 2018/new hire training session",
          "target": "jc/training 2018/new hire training session"
        },
        {
          "source": "21.232.98.32",
          "label": "access",
          "id": "21.232.98.32-Org Chart/Org Chart 2014/With Photos",
          "target": "Org Chart/Org Chart 2014/With Photos"
        },
        {
          "source": "21.232.98.32",
          "label": "access",
          "id": "21.232.98.32-Training Center/\u96c6\u56e2\u5185\u57f9\u8bad/2016 Head Office Training Attendees",
          "target": "Training Center/\u96c6\u56e2\u5185\u57f9\u8bad/2016 Head Office Training Attendees"
        },
        {
          "source": "21.232.98.32",
          "label": "access",
          "id": "21.232.98.32-Annual Party/2017 Party/BOC 2017 GALA PHOTO",
          "target": "Annual Party/2017 Party/BOC 2017 GALA PHOTO"
        },
        {
          "source": "21.232.98.32",
          "label": "access",
          "id": "21.232.98.32-Training Center/2018/1014-1026 \u5883\u5916\u76d1\u7ba1\u6cd5\u6848\u53ca\u5168\u7403\u5e02\u573a\u4e1a\u52a1\u4ea7\u54c1\u5408\u89c4\u57f9\u8bad\u73ed",
          "target": "Training Center/2018/1014-1026 \u5883\u5916\u76d1\u7ba1\u6cd5\u6848\u53ca\u5168\u7403\u5e02\u573a\u4e1a\u52a1\u4ea7\u54c1\u5408\u89c4\u57f9\u8bad\u73ed"
        },
        {
          "source": "21.232.98.32",
          "label": "access",
          "id": "21.232.98.32-Jennifer/Resume Received/Resume sent to HR",
          "target": "Jennifer/Resume Received/Resume sent to HR"
        },
        {
          "source": "21.232.98.32",
          "label": "access",
          "id": "21.232.98.32-Turnover Report/employee turn over report.xlsx:zone.identifier",
          "target": "Turnover Report/employee turn over report.xlsx:zone.identifier"
        },
        {
          "source": "21.232.98.32",
          "label": "access",
          "id": "21.232.98.32-JC/Training 2018/new hire training session",
          "target": "JC/Training 2018/new hire training session"
        },
        {
          "source": "21.232.98.32",
          "label": "access",
          "id": "21.232.98.32-Job Description/Job descriptions by department/JD Error",
          "target": "Job Description/Job descriptions by department/JD Error"
        },
        {
          "source": "21.232.98.32",
          "label": "access",
          "id": "21.232.98.32-Job Description/2017 Job Description/word docs from dianna",
          "target": "Job Description/2017 Job Description/word docs from dianna"
        },
        {
          "source": "21.232.98.32",
          "label": "access",
          "id": "21.232.98.32-BOC Training/2017/Training Records",
          "target": "BOC Training/2017/Training Records"
        },
        {
          "source": "22.232.64.117",
          "label": "access",
          "id": "22.232.64.117-8.253.130.254",
          "target": "8.253.130.254"
        },
        {
          "source": "22.232.64.117",
          "label": "access",
          "id": "22.232.64.117-23.33.118.232",
          "target": "23.33.118.232"
        },
        {
          "source": "22.232.64.117",
          "label": "access",
          "id": "22.232.64.117-8.252.18.126",
          "target": "8.252.18.126"
        },
        {
          "source": "22.232.64.117",
          "label": "access",
          "id": "22.232.64.117-65.55.44.108",
          "target": "65.55.44.108"
        },
        {
          "source": "22.232.64.117",
          "label": "access",
          "id": "22.232.64.117-23.73.148.34",
          "target": "23.73.148.34"
        },
        {
          "source": "22.232.64.117",
          "label": "access",
          "id": "22.232.64.117-8.253.129.121",
          "target": "8.253.129.121"
        },
        {
          "source": "22.232.64.117",
          "label": "access",
          "id": "22.232.64.117-40.77.231.3",
          "target": "40.77.231.3"
        },
        {
          "source": "22.232.64.117",
          "label": "access",
          "id": "22.232.64.117-23.14.181.100",
          "target": "23.14.181.100"
        },
        {
          "source": "22.232.64.117",
          "label": "access",
          "id": "22.232.64.117-13.78.186.254",
          "target": "13.78.186.254"
        },
        {
          "source": "22.232.64.117",
          "label": "access",
          "id": "22.232.64.117-173.222.115.51",
          "target": "173.222.115.51"
        },
        {
          "source": "22.232.64.117",
          "label": "access",
          "id": "22.232.64.117-8.252.66.126",
          "target": "8.252.66.126"
        },
        {
          "source": "22.232.64.117",
          "label": "access",
          "id": "22.232.64.117-13.78.168.230",
          "target": "13.78.168.230"
        },
        {
          "source": "22.232.64.117",
          "label": "access",
          "id": "22.232.64.117-8.251.11.254",
          "target": "8.251.11.254"
        },
        {
          "source": "22.232.64.117",
          "label": "access",
          "id": "22.232.64.117-96.7.198.96",
          "target": "96.7.198.96"
        },
        {
          "source": "22.232.64.117",
          "label": "access",
          "id": "22.232.64.117-173.222.113.160",
          "target": "173.222.113.160"
        },
        {
          "source": "22.232.64.117",
          "label": "access",
          "id": "22.232.64.117-23.33.102.74",
          "target": "23.33.102.74"
        },
        {
          "source": "22.232.64.117",
          "label": "access",
          "id": "22.232.64.117-23.196.175.12",
          "target": "23.196.175.12"
        },
        {
          "source": "22.232.64.117",
          "label": "access",
          "id": "22.232.64.117-8.253.129.249",
          "target": "8.253.129.249"
        },
        {
          "source": "22.232.64.117",
          "label": "access",
          "id": "22.232.64.117-8.249.45.254",
          "target": "8.249.45.254"
        },
        {
          "source": "22.232.64.117",
          "label": "access",
          "id": "22.232.64.117-8.252.28.126",
          "target": "8.252.28.126"
        },
        {
          "source": "22.232.64.117",
          "label": "access",
          "id": "22.232.64.117-8.253.129.204",
          "target": "8.253.129.204"
        },
        {
          "source": "22.232.64.117",
          "label": "access",
          "id": "22.232.64.117-8.249.43.254",
          "target": "8.249.43.254"
        },
        {
          "source": "22.232.64.117",
          "label": "access",
          "id": "22.232.64.117-13.68.93.109",
          "target": "13.68.93.109"
        },
        {
          "source": "22.232.64.117",
          "label": "access",
          "id": "22.232.64.117-8.251.15.254",
          "target": "8.251.15.254"
        },
        {
          "source": "22.232.64.117",
          "label": "access",
          "id": "22.232.64.117-8.249.47.254",
          "target": "8.249.47.254"
        },
        {
          "source": "22.232.64.117",
          "label": "access",
          "id": "22.232.64.117-8.252.37.254",
          "target": "8.252.37.254"
        },
        {
          "source": "22.232.64.117",
          "label": "access",
          "id": "22.232.64.117-8.252.67.254",
          "target": "8.252.67.254"
        },
        {
          "source": "22.232.64.117",
          "label": "access",
          "id": "22.232.64.117-8.252.18.254",
          "target": "8.252.18.254"
        },
        {
          "source": "22.232.64.117",
          "label": "access",
          "id": "22.232.64.117-13.32.234.178",
          "target": "13.32.234.178"
        },
        {
          "source": "22.232.64.117",
          "label": "access",
          "id": "22.232.64.117-8.252.56.254",
          "target": "8.252.56.254"
        },
        {
          "source": "22.232.64.117",
          "label": "access",
          "id": "22.232.64.117-8.252.38.126",
          "target": "8.252.38.126"
        }
      ]
    }
}

export default test_graph