import 'onsenui/css/onsen-css-components.css';
import 'onsenui/css/onsenui.css';
import * as React from 'react';
import {BackButton, Button, Card, Icon, Page, Toolbar, ToolbarButton} from 'react-onsenui';


class App extends React.Component {
  public render() {
    return (
      <Page
        renderToolbar={this.pageToolBar}>
        <div>
          <Card>
            <Button modifier="large--cta">ほげほげ</Button>
          </Card>
        </div>
      </Page>
    );
  }
  private pageToolBar() {
    return (
      <Toolbar>
        <div className="left">
          <BackButton>
              Back
          </BackButton>
        </div>
        <div className="center">
          Title
        </div>
        <div className="right">
          <ToolbarButton>
            <Icon icon="md-menu" />
          </ToolbarButton>
        </div>
      </Toolbar>
    )
  }
}

export default App;
