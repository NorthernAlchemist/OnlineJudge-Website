import { Problem } from './models/problem.models';

export const PROBLEMS: Problem[] = [
  {
    id: 1,
    name: "Two Sum",
    desc: "Given an array of integers, find two numbers such that they add up to specific target number. The function twoSum should return indices of the two numbers such that they add up to the target.",
    difficulty: "easy"
  },
  {
    id: 2,
    name: "3 Sum",
    desc: "Given an array S of n integers, are there elements a, b, c in S such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.",
    difficulty: "medium"
  },
  {
    id: 3,
    name: "Median of Two Sorted Array",
    desc: "There are two sorted arrays nums1 and nums2 of size m and n respectively. Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).",
    difficulty: "hard"
  }
];
