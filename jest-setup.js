import jestDom from '@testing-library/jest-dom';
import * as matchers from 'jest-extended';

expect.extend(jestDom);
expect.extend(matchers);
