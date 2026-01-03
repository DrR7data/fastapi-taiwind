header:
	@echo "work with fastapi and taiwind"

venv:
	python3 -m venv ~/.flas
	source ~/.flas/bin/activate
install:
	pip install --upgrade pip &&\
	pip install -r requirements.txt
install-aws:
	pip install --upgrade pip &&\
	pip install -r requirements-aws.txt
install-gcloud:
	pip install --upgrade pip &&\
	pip install -r requirements-gcloud.txt
install-azure:
	pip install --upgrade pip &&\
	pip install -r requirements-azure.txt
install-space:
	pip install --upgrade pip &&\
	pip install -r requirements-space.txt
format:
	black *.py

lint:
	pylint --disable=R,C main.py

test:
	python -m pytest -vv --cov=main test_main.py

all: install lint test right

build:
	docker build . -t doses-drug-imc 

run:
	#docker run -it -p 127.0.0.1:8000:8000 --name doses-drug-imc doses-drug-imc sh 
	docker run -p 127.0.0.1:8000:8000 --name doses-drug-imc doses-drug-imc
	
start:
	docker start doses-drug-imc
app:
	 python3 app.py

exe:
	docker exec -it doses-drug-imc sh
clean:
	find . -type d -name "__pycache__" -exec rm -rf {} +
	find . -type f -name "*.pyc" -delete
	find . -type f -name "*.pyo" -delete
	find . -type f -name ".coverage" -delete
	rm -rf htmlcov/
	rm -rf .pytest_cache/

right:
	@echo "Hello, All right" 