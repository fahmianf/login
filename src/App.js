import './App.css';
import Logo from './react.png';


function App() {
  return (
    <div>
      <img src={Logo} class ="icon" alt="Logo" />
      <div>
        <p class = 'bless'>
          Ahmad Nur Fahmi
        </p>
        <p>
          Silahkan Masuk Akun Kakaedu Anda
        </p>
      </div>
      <form>
        <label>
          <input class = "email" type="text" name="Alamat_Email" placeholder='Alamat Email' />
        </label>
      </form>

      <form>
        <label>
          <input class = "pwd" type="text" name="Password" placeholder='Password' />
        </label>
      </form>
      <input class = "submit" type="submit" name = "Masuk"/>
    </div>
   
  )
}

export default App;
