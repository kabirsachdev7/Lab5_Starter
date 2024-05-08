// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

// isPhoneNumber() unit tests
test('validates if 858-308-6615 is a phone number', () => {
  expect(isPhoneNumber('858-308-6615')).toBe(true);
});

test('validates if 111-1111-1111 is a phone number', () => {
  expect(isPhoneNumber('111-1111-1111')).toBe(true);
});

test('validates if abcd-abc-6969 is a phone number', () => {
  expect(isPhoneNumber('abcd-abc-6969')).toBe(false);
});

test('validates if 69 is a phone number', () => {
  expect(isPhoneNumber('69')).toBe(false);
});


// isEmail() unit tests
test('validates if kasss@gmail.com is an email', () => {
  expect(isEmail('kasss@gmail.com')).toBe(true);
});

test('validates if hello@gmail.com is an email', () => {
  expect(isEmail('hello@gmail.com')).toBe(true);
});

test('validates if fiver.gmail.com is an email', () => {
  expect(isEmail('fiver.gmail.com')).toBe(false);
});

test('validates if word is an email', () => {
  expect(isEmail('word@gmailcom')).toBe(false);
});


// isStrongPassword unit tests
test('validates if a1234 is strong password', () => {
  expect(isStrongPassword('a1234')).toBe(true);
});

test('validates if Kabir_712 is strong password', () => {
  expect(isStrongPassword('Kabir_712')).toBe(true);
});

test('validates if 1234 is strong password', () => {
  expect(isStrongPassword('1234')).toBe(false);
});

test('validates if longgggggpasssowrd will return false for passwords over 15 characters', () => {
  expect(isStrongPassword('longgggggpasssowrd')).toBe(false);
});


// isDate unit tests
test('validates if 12/03/2002 is a date', () => {
  expect(isDate('12/03/2002')).toBe(true);
});

test('validates if 1/7/2002 is a date', () => {
  expect(isDate('1/7/2002')).toBe(true);
});

test('validates if 12345789 is a date', () => {
  expect(isDate('12345789')).toBe(false);
});

test('validates if 12/03/125 is a date', () => {
  expect(isDate('12/03/125')).toBe(false);
});

// isHexColor unit tests
test('validates if F5FFFA is a Hex Color', () => {
  expect(isHexColor('F5FFFA')).toBe(true);
});

test('validates if 123a44 is a Hex Color', () => {
  expect(isHexColor('123a44')).toBe(true);
});

test('validates if 69 is a Hex Color', () => {
  expect(isHexColor('69')).toBe(false);
});

test('validates if 5555555 is a Hex Color', () => {
  expect(isHexColor('5555555')).toBe(false);
});