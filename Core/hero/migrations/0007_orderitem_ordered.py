# Generated by Django 3.2 on 2021-05-26 07:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('hero', '0006_item_slug'),
    ]

    operations = [
        migrations.AddField(
            model_name='orderitem',
            name='ordered',
            field=models.BooleanField(default=False),
        ),
    ]