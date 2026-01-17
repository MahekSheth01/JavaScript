import sys

highcgpa = float("-inf")
student_highcgpa = None

lowcgpa = float("inf")
lower = None

delhi = []
age1 = []

for line in sys.stdin:

        line = line.strip()

        if not line:
                continue

        parts = line.split("\t")

        sid,name,gender,age,dept,cgpa,city,year = parts

        if len(parts)<8:
                continue

        try:

                cgpa1 = float(cgpa)

                if cgpa1 > highcgpa:
                        highcgpa = cgpa1
                        student_highcgpa = name


                if cgpa1<lowcgpa:
                        lowcgpa = cgpa1
                        lower = name

                if city.lower()=="delhi":
                        delhi.append([name,city])

                if int(age) > 20:
                        age1.append([name,age])

        except ValueError:
                continue
        
print(f"Student with highcgpa : {student_highcgpa} cgpa:{highcgpa}")

print(f"Student with lowcgpa : {lower} cgpa:{lowcgpa}")

print("Students from delhi : ")

for name,city in delhi:
        print(f"{name} city : {city}")

print("Student with age > 20 : ---")

for a,b in age1:
        print(f"{a} : {b}")

