from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated

from .models import KanbanList, KanbanItem
from .serializers import (
    KanbanListSerializer,
    KanbanItemSerializer,
)

class KanbanListViewSet(viewsets.ModelViewSet):
    serializer_class = KanbanListSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return KanbanList.objects.filter(
            user=self.request.user
        ).prefetch_related("items")

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

class KanbanItemViewSet(viewsets.ModelViewSet):
    serializer_class = KanbanItemSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return KanbanItem.objects.filter(
            kanban_list__user=self.request.user
        ).select_related("kanban_list")