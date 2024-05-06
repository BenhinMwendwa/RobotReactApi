import { useEffect ,useState } from "react";


const BotCollection = ({ onEnlist }) => {
    const [bots, setBots] = useState([]);
  
    useEffect(() => {
      fetch('http://localhost:3000/bots')
        .then(response => response.json())
        .then(data => setBots(data))
        .catch(error => console.error('Error fetching bots:', error));
    }, []);
  
    const handleEnlist = (bot) => {
      onEnlist(bot);
    };
  


  return (
    <div>
      
    </div>
  )
}

export default botCollection
