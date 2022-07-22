import React from 'react';

import './App.css';
// import { Stack, Button } from 'react-bootstrap'
import Container from 'react-bootstrap/esm/Container'
import BudgetCard from './components/BudgetCard';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className='App'>
      <Navbar></Navbar>
      <Container className='my-4'>
      {/* <Stack direction='horizontal' gap="2" className='mb-4'>
        <h1 className='me-auto'>Budgets</h1>
        <Button variant="primary">Add Budget</Button>
        <Button variant="outline-primary">Add Expense</Button>
      </Stack> */}
      <div 
        style={{
          display:"grid", 
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "1rem",
          alignItems: "flex-start"
        }}
      >
        <BudgetCard 
          name="Entertainment" 
          gray
          amount={200} 
          max={1000}
          inner="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        ></BudgetCard>
        <BudgetCard 
          name="Entertainment" 
          gray
          amount={1100} 
          max={1000}
          inner="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        ></BudgetCard>
        <BudgetCard 
          name="Entertainment" 
          gray
          amount={600} 
          max={1000}
          inner="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        ></BudgetCard>
        <BudgetCard 
          name="Entertainment" 
          gray
          amount={800} 
          max={1000}
          inner="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        ></BudgetCard>
      </div>
    </Container>
    </div>
  )
}

export default App;
