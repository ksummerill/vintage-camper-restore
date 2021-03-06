import React, { useState } from 'react';
import Button from 'react-bootstrap/Button'

  function Vote() {
    const [count, setCount] = useState(0);

    return (
      <div>
        <Button variant="outline-secondary" onClick={() => setCount(count + 1)}>❤️</Button>
        <p>{count}</p>
      </div>
    );
  }

export default Vote
