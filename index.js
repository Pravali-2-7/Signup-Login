def signup():
    username = input("Create username: ")
    password = input("Create password: ")
    return username, password


def login(saved_username, saved_password):
    username = input("Enter username: ")
    password = input("Enter password: ")

    if username == saved_username and password == saved_password:
        print("Login successful!")
    else:
        print("Login failed! Incorrect username or password.")


# --- Main Program ---
u, p = signup()
login(u, p)
