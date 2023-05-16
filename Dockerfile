FROM python:3.7-alpine

WORKDIR /usr/src/app

COPY requirements.txt ./

# RUN apk add --update python3.7-dev
RUN apk add --no-cache --virtual .build-deps gcc musl-dev \
    sudo \
    # Pillow dependencies
    freetype-dev \
    fribidi-dev \
    harfbuzz-dev \
    jpeg-dev \
    lcms2-dev \
    libimagequant-dev \
    openjpeg-dev \
    tcl-dev \
    tiff-dev \
    tk-dev \
    zlib-dev \
    g++ \
    zeromq-dev
RUN pip3 install --upgrade pip
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

CMD [ "python", "./manage.py", "runserver" ]
