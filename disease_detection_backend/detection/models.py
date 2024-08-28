# detection/models.py

from django.db import models  # Keep this import for any Django models you might add in the future
from sklearn.naive_bayes import MultinomialNB
import numpy as np

# Define any Django models here if needed
# class DiseaseModel(models.Model):
#     name = models.CharField(max_length=100)
#     description = models.TextField()

# Your AI model code
# Sample dataset for disease detection (Replace with actual data)
X_train = np.array([[1, 0, 1], [0, 1, 0], [1, 1, 0], [0, 0, 1]])  # Symptom features
y_train = np.array(['Disease A', 'Disease B', 'Disease A', 'Disease C'])  # Corresponding diseases

# Train a simple Naive Bayes classifier
model = MultinomialNB()
model.fit(X_train, y_train)

def predict_disease(symptoms):
    """
    Predict the disease based on symptoms.
    symptoms: List of binary symptom indicators (e.g., [1, 0, 1])
    """
    prediction = model.predict([symptoms])
    return prediction[0]
