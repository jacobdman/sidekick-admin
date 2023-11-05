import { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
// UI
import Grid from 'UI/Grid';
import TextField from 'UI/TextField';

interface Props {
  handleLogIn: (login: any) => void;
}

const LoginWithEmail: React.FC<Props> = ({handleLogIn}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const auth = getAuth();

  signInWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      // Signed up
      const user = userCredential.user;
      handleLogIn(user);
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });

  return (
    <Grid container spacing={3}>
      <Grid item>
        <TextField placeholder="Email" />
      </Grid>
      <Grid item>
        <TextField placeholder="Password" type="password" />
      </Grid>
    </Grid>
  );
};

export default LoginWithEmail;
