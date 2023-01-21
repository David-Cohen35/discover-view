# pull official base image
FROM python:3.10.3

# set working directory
WORKDIR /usr/src/app

# set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1
# install dependencies
RUN pip install --upgrade pip
COPY ./requirements.txt .
RUN pip install -r requirements.txt

# add app
COPY . .

# add entrypoint.sh
CMD [ "python3", "-m" , "flask", "run", "--host=0.0.0.0"]