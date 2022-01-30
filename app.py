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


@app.route("/clear_your_head")
def clear_your_head():
    return render_template("clear-your-head.html")


@app.route("/my_daily_lift")
def my_daily_lift():
    return render_template("my-daily-lift.html")


if __name__ == "__main__":
    app.run(host=os.environ.get("IP"),
            port=int(os.environ.get("PORT")),
            debug=True)
