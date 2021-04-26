import React from 'react';
import {storiesOf} from '@storybook/react';

import Button from '../04/Button';

storiesOf('Button', module)
.addWithJSX('기본설정', () => <Button>전송하기</Button>)
.addWithJSX('large 예제', ()=> <Button large>안뇽</Button>);