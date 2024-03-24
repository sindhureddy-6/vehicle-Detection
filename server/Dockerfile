FROM python:3.9-slim
WORKDIR /app
ENV FLASK_APP=webapp.py
COPY requirements.txt .
RUN apt-get update && DEBIAN_FRONTEND=noninteractive apt-get install\
    libgl1\
    libgl1-mesa-glx \ 
    libglib2.0-0 -y && \
    rm -rf /var/lib/apt/lists/*
RUN pip install -r requirements.txt
COPY . .
CMD ["python", "webapp.py"]