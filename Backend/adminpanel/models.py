from typing import Any
from django.db import models
# from django.utils import timezone

class GlobalSettings(models.Model):
    SiteName = models.CharField(max_length=100)
    SiteContact = models.CharField(max_length=100)
    SiteEmail = models.EmailField()
    SiteAddress = models.CharField(max_length=500)
    Sitedescription = models.CharField(max_length=500)
    Sitelicence = models.CharField(max_length=300)
    Sitetwitterlink = models.CharField(max_length=300)
    Sitefacebooklink = models.CharField(max_length=300)
    Sitelinkdinlink = models.CharField(max_length=300)
    Siteinstagram = models.CharField(max_length=300)
    Siteyoutubelink = models.CharField(max_length=300)
    Sitefax = models.CharField(max_length=300,null=True)
    SiteBox = models.CharField(max_length=300,null=True)
    logo = models.ImageField(upload_to="Global/",max_length=200, null=True, default=None)
    back_image = models.ImageField(upload_to="Global/",null=True)
    qr_code = models.ImageField(upload_to="QRCODE/",null=True)
    brochure = models.FileField(upload_to="brochure/",null=True)
    brochure_name = models.CharField(max_length=100,null=True)


    def __str__(self):
        return self.SiteName

class ContactUS(models.Model):
    name = models.CharField(max_length=50)
    mobileno = models.CharField(max_length=50,null=True)
    email = models.CharField(max_length=50)
    message = models.TextField(null=True)
    
    def __str__(self):
        return self.name
    
class BookRoom(models.Model):
    check_in = models.CharField(max_length=50,null=True)
    check_out = models.CharField(max_length=50,null=True)
    adults = models.CharField(max_length=50,null=True)
    children = models.CharField(max_length=50,null=True)
    bed_type = models.CharField(max_length=50,null=True)
    room_type = models.CharField(max_length=50,null=True)
    
    def __str__(self):
        return self.room_type
    

class Newsletter(models.Model):
    email = models.CharField(max_length=100, null=True)

    def __str__(self):
        return self.email
    
    

class Navigation(models.Model):
    PAGE_TYPE = (
        ('Home', 'Home'),('Slider','Slider'),('Home/About', 'Home/About'),('Safari', 'Safari'),
        ('Reviews', 'Reviews'),('About', 'About'),('Achievements', 'Achievements'),('Services', 'Services'),
        ('Services_1', 'Services_1'),('Features','Features'),('Rooms & Suites','Rooms & Suites'),
        ('Rooms & Suites_1','Rooms & Suites_1'),('Video_Gallery', 'Video_Gallery'),('Features_1','Features_1'),
        ('Video_Gallery_1', 'Video_Gallery_1'),('Image_Gallery', 'Image_Gallery'),('Features_2','Features_2'),
        ('Image_Gallery_1', 'Image_Gallery_1'),('Contact', 'Contact'),('Group', 'Group'),('Reviews_1', 'Reviews_1'),
        ('Features_3','Features_3')
    )

    STATUS = (
        ('Publish', 'Publish'),
        ('Draft', 'Draft')
    )
    name = models.CharField(max_length=100, null=False)
    caption = models.CharField(max_length=100)
    status = models.CharField(choices=STATUS, max_length=50)
    position = models.IntegerField()
    page_type = models.CharField(choices=PAGE_TYPE, null=True, blank=True, max_length=50)
    title = models.CharField(max_length=200)
    short_desc = models.TextField(null=True)
    desc = models.TextField(null=True)
    bannerimage = models.ImageField(upload_to="about/",null=True)
    meta_title = models.CharField(max_length=100, null=True)
    meta_keyword = models.CharField(max_length=100, null=True)
    icon_image = models.TextField(null=True)
    slider_image = models.ImageField(upload_to="about/", null=True)
    Parent = models.ForeignKey('self', related_name="childs", on_delete=models.CASCADE, null=True, blank=True)
    brochure = models.FileField(upload_to="brochure/",null=True)
    date = models.DateField(default="2012-12-12", null=True)
    image = models.ImageField(upload_to="about/",null=True)
    video = models.FileField(upload_to="video/%y", null=True)

    def __str__(self):
        return self.name


