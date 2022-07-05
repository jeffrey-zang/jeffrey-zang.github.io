import Header from './components/Header'
import Title from './components/Title'
// import Button from './components/Button'

const darkmodeColour = '#282c34';

// const headingStyle = {
//   color: 'ghostwhite',
//   backgroundColor: darkmodeColour
// }

const heading2Style = {
  color: 'cornflowerblue',
  backgroundColor: darkmodeColour,
  alignItems: 'center',
  fontSize: '50px'
}

function four04() {

  // const d = new Date()
  // var myage = d.getFullYear() - 2007
  // if (myage == 18) {myage = ''}

  return (
    <>
    <div className="container" style={{ backgroundColor: '#282c34', maxWidth: '100%', margin:0, padding:'40px' }}>
      <Header title="Portfolio" colour={heading2Style.color} />
      {/* <h1 style = {headingStyle} className='header'> Hello, I'm Jeffrey Zang </h1> */}
      <Title></Title>
      {/* <p style = {{display: 'flex', color: 'white', fontSize: '18px', justifyContent: 'center', alignItems: 'center'}}>
        I am a 
      </p> */}
      {/* <h2 style={{ color: 'greenyellow' }}>e</h2> */}
    </div>

    </>
  );
}

export default four04;
