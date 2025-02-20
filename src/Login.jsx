import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const handleUser = (e) => setUser(e.target.value);
    const handlePassword = (e) => setPassword(e.target.value);
    const submit = () => {
        if (user === "H" && password === "H" ) {
            localStorage.setItem('isLoggedIn', 'true');
            navigate('/applayout/*');
        } 
        else {
            alert("Invalid username or password");
        }
    };
        return (
            <div style={styles.container}>
                <div style={styles.formContainer}>
                    <label style={styles.label}>
                        UserName:
                        <input
                            type="text"
                            onChange={handleUser}
                            style={styles.input}
                            required
                        />
                    </label><br />
                    <label style={styles.label}>
                        Password:
                        <input
                            type="password"
                            onChange={handlePassword}
                            style={styles.input}
                            required
                        />
                    </label><br />
                    <button onClick={submit} style={styles.submitButton}>Submit</button>
                </div>
            </div>
        );
    }
    
    const styles = {
        container: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            backgroundColor: '#0000FF',
            padding: '0 20px',
        },
        formContainer: {
            width: '100%',
            maxWidth: '400px',
            backgroundColor: '#fff',
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        },
        label: {
            fontSize: '1rem',
            marginBottom: '8px',
            color: '#333',
            display: 'block',
            marginLeft: '10px',
        },
        input: {
            padding: '10px',
            marginBottom: '15px',
            borderRadius: '5px',
            border: '1px solid #ccc',
            width: '100%',
            fontSize: '1rem',
        },
        submitButton: {
            width: '60%',
            padding: '12px',
            backgroundColor: 'blue',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '1rem',
            marginTop: '15px',
        }
    };
    export default Login;   