from django.test import TestCase
from django.contrib.auth.models import User
from .models import Team, Activity, Leaderboard, Workout

class BasicModelTest(TestCase):
    def test_team_creation(self):
        team = Team.objects.create(name='Test Team')
        self.assertEqual(str(team), 'Test Team')

    def test_activity_creation(self):
        activity = Activity.objects.create(name='Test', user='testuser', duration=10)
        self.assertEqual(str(activity), 'Test - testuser')

    def test_leaderboard_creation(self):
        lb = Leaderboard.objects.create(user='testuser', score=50)
        self.assertEqual(str(lb), 'testuser: 50')

    def test_workout_creation(self):
        workout = Workout.objects.create(name='Test Workout', description='desc')
        self.assertEqual(str(workout), 'Test Workout')
