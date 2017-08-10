import * as React from "react";
import Loading from '../common/Loading';

export interface HelloProps { compiler: string; framework: string; }

export class Hello extends React.Component<HelloProps, undefined> {
	render() {
		return <h1><Loading /> Hello from TypeScript and React!</h1>;
	}
}
