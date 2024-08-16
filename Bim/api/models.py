from django.db import models
from django.contrib.auth.models import User
from django.contrib.auth.models import AbstractUser

class Note(models.Model):
    title = models.CharField(max_length=100)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name="notes")

    def __str__(self):
        return self.title


class Projects(models.Model):
    employer_last_name = models.CharField(max_length=50)
    architect_last_name = models.CharField(max_length=50)
    project_name = models.CharField(max_length=50)
    personnel_id = models.ForeignKey('Personnel', on_delete=models.CASCADE) # purchasingManager

class Personnel(models.Model):
    national_id = models.IntegerField()
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    number = models.IntegerField()
    join_date = models.DateField()
    wage = models.IntegerField()
    bank_number = models.CharField(max_length=26)

    def __str__(self):
        return f"{self.first_name} {self.last_name}"

class Subjects(models.Model):
    name = models.CharField(max_length=50)
    # task_id = models.ForeignKey("Tasks", on_delete=models.CASCADE)
    project_id = models.ForeignKey(Projects, on_delete=models.CASCADE)
    estimated_time = models.IntegerField()

class Tasks(models.Model):
    report_id = models.ForeignKey("Reports", on_delete=models.CASCADE)
    national_id = models.ForeignKey(Personnel, on_delete=models.CASCADE)
    contractor_id = models.ForeignKey("Contractors", on_delete=models.CASCADE)
    # personnel_num = models.IntegerField()
    subject_id = models.ForeignKey(Subjects, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    unit_id = models.ForeignKey("Units", on_delete=models.CASCADE)
    quantity = models.IntegerField()
    description = models.CharField(max_length=300)
    proximate_time = models.IntegerField()


class Warehouses(models.Model):
    name = models.CharField(max_length=50)
    location = models.CharField(max_length=50)
    
class Items(models.Model):
    product_id = models.IntegerField()
    name = models.CharField(max_length=50)
    description = models.CharField(max_length=300)
    unit_id = models.ForeignKey('Units', on_delete=models.CASCADE)
    quantity = models.IntegerField()
    warehouse_id = models.ForeignKey(Warehouses, on_delete=models.CASCADE)

class PurchaseRequests(models.Model):
    name = models.CharField(max_length=50)
    description = models.CharField(max_length=300)
    unit_id = models.ForeignKey('Units', on_delete=models.CASCADE)
    quantity = models.IntegerField()

class Storekeepers(models.Model):
    warehouse_id = models.ForeignKey(Warehouses, on_delete=models.CASCADE)
    national_id = models.ForeignKey(Personnel, on_delete=models.CASCADE)

class Units(models.Model):
    name = models.CharField(max_length=50)
    description = models.CharField(max_length=300)

class Origins(models.Model):
    name = models.CharField(max_length=50)
    description = models.CharField(max_length=300)
    bank_number = models.CharField(max_length=26)
    number = models.IntegerField()
    quality = models.IntegerField()
    gain = models.IntegerField()
    city = models.CharField(max_length=50)
    street = models.CharField(max_length=50)


class Roles(models.Model):
    title = models.CharField(max_length=50)
    description = models.CharField(max_length=300)
    minimum_wage = models.IntegerField()

    def __str__(self):
        return self.title

# WHERE?
class AttendanceList(models.Model):
    national_id = models.ForeignKey(Personnel, on_delete=models.CASCADE)
    date = models.DateField()

class PersonnelRole(models.Model):
    national_id = models.ForeignKey(Personnel, on_delete=models.CASCADE)
    role_id = models.ForeignKey(Roles, on_delete=models.CASCADE)

class ProjectPersonnel(models.Model):
    national_id = models.ForeignKey(Personnel, on_delete=models.CASCADE)
    project_id = models.ForeignKey(Projects, on_delete=models.CASCADE)

class Entered(models.Model):
    name = models.CharField(max_length=50)
    description = models.CharField(max_length=300)
    unit_id = models.ForeignKey(Units, on_delete=models.CASCADE)
    quantity = models.IntegerField()
    price_per_unit = models.IntegerField()
    origin_id = models.ForeignKey(Origins, on_delete=models.CASCADE)
    report_id = models.ForeignKey('Reports', on_delete=models.CASCADE)

class Reports(models.Model):
    national_id = models.ForeignKey(Personnel, on_delete=models.CASCADE, null=True)
    project_id = models.ForeignKey(Projects, on_delete=models.CASCADE, null=True)
    # entered_id = models.ForeignKey(Entered, on_delete=models.CASCADE, null=True)
    date = models.DateField(null=True)
    weather = models.IntegerField(null=True)
    signature_0 = models.BinaryField(null=True)
    signature_1 = models.BinaryField(null=True)

class EnteredWarehouse(models.Model):
    entered_id = models.ForeignKey(Entered, on_delete=models.CASCADE)
    warehouse_id = models.ForeignKey(Warehouses, on_delete=models.CASCADE)
    date = models.DateField()

class WarehouseProject(models.Model):
    project_id = models.ForeignKey(Projects, on_delete=models.CASCADE)
    warehouse_id = models.ForeignKey(Warehouses, on_delete=models.CASCADE)

class Workers(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    number = models.IntegerField()
    join_date = models.DateField()
    wage = models.IntegerField()
    bank_number = models.CharField(max_length=26)

class TaskWorker(models.Model):
    task_id = models.ForeignKey(Tasks, on_delete=models.CASCADE)
    worker_id = models.ForeignKey(Workers, on_delete=models.CASCADE)


class BodyMaster(models.Model):
    report_id = models.ForeignKey(Reports, on_delete=models.CASCADE)
    national_id = models.ForeignKey(Personnel, on_delete=models.CASCADE)
    signature_0 = models.BinaryField()
    signature_1 = models.BinaryField()

class PublicKeys(models.Model):
    national_id = models.ForeignKey(Personnel, on_delete=models.CASCADE)
    public_key = models.BinaryField()

class Contractors(models.Model):
    has_system = models.BooleanField(default=False)
    name = models.CharField(max_length=50)
    description = models.CharField(max_length=300)
    bank_number = models.CharField(max_length=26)
    quality = models.IntegerField()


class TaskImages(models.Model):
    task_id = models.ForeignKey(Tasks, on_delete=models.CASCADE)
    image = models.BinaryField()

class ProjectContractor(models.Model):
    project_id = models.ForeignKey(Projects, on_delete=models.CASCADE)
    contractor_id = models.ForeignKey(Contractors, on_delete=models.CASCADE)

class Machines(models.Model):
    contractor_id = models.ForeignKey(Contractors, on_delete=models.CASCADE)
    name = models.CharField(max_length=50)
    quantity = models.IntegerField()
    description = models.CharField(max_length=300)

class TaskMachine(models.Model):
    task_id = models.ForeignKey(Tasks, on_delete=models.CASCADE)
    machine_id = models.ForeignKey(Machines, on_delete=models.CASCADE)
    time = models.IntegerField()

class Meetings(models.Model):
    name = models.CharField(max_length=50)
    date = models.TimeField()
    duration = models.IntegerField()
    proceedings = models.CharField(max_length=500)
    agenda = models.CharField(max_length=500)
    report_id = models.ForeignKey(Reports, on_delete=models.CASCADE)

class MeetingPersonnel(models.Model):
    meeting_id = models.ForeignKey(Meetings, on_delete=models.CASCADE)
    personnel_id = models.ForeignKey(Personnel, on_delete=models.CASCADE)

class Difficulities(models.Model):
    description = models.CharField(max_length=300)
    report_id = models.ForeignKey(Reports, on_delete=models.CASCADE)

class Pursuits(models.Model):
    report_id = models.ForeignKey(Reports, on_delete=models.CASCADE)
    description = models.CharField(max_length=500)
    personnel_id = models.ForeignKey(Personnel, on_delete=models.CASCADE)

class Coordinations(models.Model):
    report_id = models.ForeignKey(Reports, on_delete=models.CASCADE)
    description = models.CharField(max_length=500)
    personnel_id = models.ForeignKey(Personnel, on_delete=models.CASCADE)



class Meta:
    app_label = 'bimapp'
    


