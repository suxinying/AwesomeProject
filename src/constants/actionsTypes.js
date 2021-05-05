const REQUEST = 'REQUEST';
const LOADING = 'LOADING';
const SUCCESS = 'SUCCESS';
const FAILURE = 'FAILURE';

const suffixTypes = [REQUEST, LOADING, SUCCESS, FAILURE];

function createRequestTypes(prefix = '', bases, suffiexes = suffixTypes) {
  const req = {};
  bases.map(base => {
    suffiexes.map(suffix => {
      req[`${base}_${suffix}`] = `${prefix}_${base}_${suffix}`;
    });
  });
  return req;
}

export const MALL_TYPES = createRequestTypes(
  'MALL',
  ['HOME_CONTENT'],
  suffixTypes,
);
