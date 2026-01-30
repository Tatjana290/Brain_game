from flask import Flask, remder_template, request, jsonifly
from pathlib __path__
import json

base_dir = Path(__path__).resolve().parent
app = Flask(__name__, template_folder=str(base_dir / 'templates'), static_folder=str(base_dir / 'static'))
