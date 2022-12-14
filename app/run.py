from api import app, db

@app.shell_context_processor
def make_shell_context():
    return {"app": app,
            "db": db
            }



if __name__ == '__main__':
    app.run(debug=True, use_reloader=True, threaded=True)
