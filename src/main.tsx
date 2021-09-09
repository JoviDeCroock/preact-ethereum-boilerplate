import { render } from 'preact';
import Greeting from './Greeting';

const appElement = document.getElementById('app');

if (appElement) render(<Greeting />, appElement);