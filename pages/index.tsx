import React from 'react';
import Header from '../components/Header';
import { shadcn } from '../components/shadcn';

const HomePage: React.FC = () => {
  return (
    <div>
      <Header />
      <h1>Welcome to My Blog</h1>
      <p>This is the home page of the blog site.</p>
      <h2>Example Shadcn Components:</h2>
      <shadcn.Button>Click Me</shadcn.Button>
      <shadcn.Card>
        <shadcn.Card.Title>Card Title</shadcn.Card.Title>
        <shadcn.Card.Content>
          This is the content of the card.
        </shadcn.Card.Content>
      </shadcn.Card>
    </div>
  );
};

export default HomePage;