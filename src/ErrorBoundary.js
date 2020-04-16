import React from "react";

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorMessage: "" };
  }

  static getDerivedStateFromError(err) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, errorMessage: err.message };
  }

  componentDidCatch() {
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, info);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <li>{this.state.errorMessage} </li>;
    }

    return this.props.children;
  }
}
