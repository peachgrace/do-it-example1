import React from 'react';
import {storiesOf} from '@storybook/react';

import Text from '../04/Text';

storiesOf('Text', module)
.addWithJSX('기본설정', () => <Text>안녕하세요</Text>)
.addWithJSX('large 예제', ()=> <Text large>안뇽</Text>)
.addWithJSX('secondary 예제', ()=> <Text secondary>안냥</Text>);