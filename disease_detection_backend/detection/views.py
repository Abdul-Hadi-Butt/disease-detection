# detection/views.py

from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import predict_disease  # Import the function from models.py

@api_view(['POST'])
def detect_disease(request):
    """
    API endpoint that receives symptoms and returns a predicted disease.
    """
    symptoms = request.data.get('symptoms', [])
    
    if not symptoms:
        return Response({'error': 'No symptoms provided'}, status=400)

    try:
        # Convert symptoms to binary list, e.g., [1, 0, 1]
        prediction = predict_disease(symptoms)
        return Response({'predicted_disease': prediction})
    except Exception as e:
        return Response({'error': str(e)}, status=500)
