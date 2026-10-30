from rest_framework.routers import DefaultRouter
from .views import KanbanListViewSet, KanbanItemViewSet

router = DefaultRouter()

router.register(
    "lists",
    KanbanListViewSet,
    basename="kanban-list",
)

router.register(
    "items",
    KanbanItemViewSet,
    basename="kanban-item",
)
urlpatterns = router.urls