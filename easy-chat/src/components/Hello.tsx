import * as React from 'react';
import './Hello.css';

export interface IProps {
    name: string;
    enthusiasmLevel?: number;
    onIncrement?: () => void;
    onDecrement?: () => void;
}

interface IState {
  currentEntusiasmLevel: number;
} 

class Hello extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      currentEntusiasmLevel: props.enthusiasmLevel || 1,
    };
  };

  public componentDidMount () {
    console.log('Компонент смонтирован')
  }

  public render() {
    const {name, enthusiasmLevel = 1} = this.props;

    if (enthusiasmLevel <= 0) {
      throw new Error('You could be a little more enthusiastic. :D');
    }

    return(
      <div className="hello">
        <div className="greeting">
          Hello {name + getExclamationMarks(enthusiasmLevel)}
          <button onClick={this.onDecrement}>-</button>
        <button onClick={this.onIncrement}>+</button>
        </div>
      </div>
    );
  }

  private onDecrement = () => {this.upDateEntusiasm(this.state.currentEntusiasmLevel - 1)};
  private onIncrement = () => {this.upDateEntusiasm(this.state.currentEntusiasmLevel + 1)};

  private upDateEntusiasm(currentEntusiasm: number) {
    this.setState({currentEntusiasmLevel: currentEntusiasm});
  }
}

export default Hello;

function getExclamationMarks(numChars: number) {
    return Array(numChars + 1).join('!');
  }