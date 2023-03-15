# Downtube

## About

API in express to download youtube videos in mp4

## Endpoints

| endpoint | method | body | description |
|-|-|-|-|
| /download | POST | url: `string` <br> path: `string` | Receives a YouTube url and the path to the folder where the file will be saved and downloads it |