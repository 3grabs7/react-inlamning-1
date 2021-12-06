import { Result } from './Result';
import './Results.scss';

export const Results = () => {
  const games = [
    { name: 'hehe', scoreMetric: 'points' },
    { name: 'haha', scoreMetric: 'ms' },
    { name: 'hihi', scoreMetric: 'points' },
    { name: 'hoho', scoreMetric: 'ms' },
  ];
  const results: { [key: string]: string[] } = {
    hehe: ['123', '23', '789'],
    haha: ['34', '234', '39824', '98234'],
  };

  return (
    <div>
      {games.map((game, gameIndex) =>
        results[game.name] ? (
          <div key={gameIndex} className='result-container'>
            <h1>{game.name}</h1>
            {results[game.name].map((result, resultIndex) => (
              <Result
                key={resultIndex}
                score={result}
                scoreMetric={game.scoreMetric}
              ></Result>
            ))}
          </div>
        ) : (
          <></>
        )
      )}
    </div>
  );
};
