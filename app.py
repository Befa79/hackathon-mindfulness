import os
from flask import (Flask, render_template, redirect, url_for)
if os.path.exists("env.py"):
    import env


app = Flask(__name__)


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/about")
def about():
    return render_template("about.html")


@app.route("/clearyourhead")
def clearyourhead():
    return render_template("clear-your-head.html")


@app.route("/mydailylift")
def mydailylift():
    return render_template("my-daily-lift.html")


@app.route("/login")
def login():
    return render_template("login.html")


if __name__ == "__main__":
    app.run(host=os.environ.get("IP"),
            port=int(os.environ.get("PORT")),
            debug=True)
