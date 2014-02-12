'use strict';

angular.module('example1App')
    .controller('MainCtrl', function ($scope) {
        $scope.snippet = "<span style='color: red'>Hi there</span>"
        $scope.buttonDisabled = true;
        $scope.events = {
            name: 'Angular Boot Camp',
            date: '112088',
            time: '10:30 am',
            location: {
                address: 'plymouth st.',
                city: 'Mountain View',
                province: 'CA'
            },
            imageURL: 'images/angularjs.jpg',
            sessions: [
                {
                    name: 'Directives Masterclass',
                    creatorName: 'Samuel L. Jackson',
                    duration: 3,
                    level: 'Beginner',
                    abstract: 'In this session you will learn the in and out\'s of directives',
                    upVoteCount: 20
                },
                {
                    name: 'Directives Masterclass',
                    creatorName: 'Bob The Builder',
                    duration: 3,
                    level: 'Intermediate',
                    abstract: 'In this session you will learn the in and out\'s of directives',
                    upVoteCount: 90
                },
                {
                    name: 'Directives Masterclass',
                    creatorName: 'Bob Smith',
                    duration: 1,
                    level: 'Advanced',
                    abstract: 'In this session you will learn the in and out\'s of directives',
                    upVoteCount: 34
                },
                {
                    name: 'Directives Masterclass',
                    creatorName: 'Dave Smith',
                    duration: 1,
                    level: 'Advanced',
                    abstract: 'In this session you will learn the in and out\'s of directives',
                    upVoteCount: 4
                },
                {
                    name: 'Directives Masterclass',
                    creatorName: 'Barbara Smith',
                    duration: 4,
                    level: 'Advanced',
                    abstract: 'In this session you will learn the in and out\'s of directives',
                    upVoteCount: 9
                }
            ]
        }
        $scope.upVoteSession = function(session){
            session.upVoteCount++;
        }
        $scope.downVoteSession = function(session){
            session.upVoteCount--;
        }
    });
