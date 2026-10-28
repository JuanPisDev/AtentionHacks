from rest_framework import serializers
from .models import KanbanList, KanbanItem

class KanbanItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = KanbanItem
        fields= ["id", "text", "kanban_list","created_at"]
        read_only_fields = ["id", "created_at"]

        def validate_kanban_list(self, kanban_list):

            request = self.context.get("request")

            if request and kanban_list.user_id != request.user.id:
                raise serializers.ValidationError(
                    "No puedes asignar tareas a una lista de otro usuario."
                )

            return kanban_list

class KanbanListSerializer(serializers.ModelSerializer):
    listTitle = serializers.CharField(
        source="list_title",
        max_length=100,
    )

    items = KanbanItemSerializer(many=True, read_only=True)

    class Meta:
        model = KanbanList
        fields = ["id", "listTitle", "items", "created_at"]
        read_only_fields = ["id", "created_at"]