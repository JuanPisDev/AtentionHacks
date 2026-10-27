from django.db import models
from django.conf import settings

class KanbanList(models.Model):
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="kanban_lists",
    )

    list_title = models.CharField(max_length=100)

    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["id"]

    def __str__(self):
        return self.list_title

class KanbanItem(models.Model):
        kanban_list = models.ForeignKey(
            KanbanList,
            on_delete=models.CASCADE,
            related_name="items",
        )

        text = models.CharField(max_length=255)

        created_at = models.DateTimeField(auto_now_add=True)

        class Meta:
            ordering = ["id"]

            def __str__(self):
                return self.text