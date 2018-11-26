/*
Navicat MySQL Data Transfer

Source Server         : 192.168.1.2
Source Server Version : 50633
Source Host           : 192.168.1.2:3306
Source Database       : blogs

Target Server Type    : MYSQL
Target Server Version : 50633
File Encoding         : 65001

Date: 2018-11-26 11:11:13
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for article
-- ----------------------------
DROP TABLE IF EXISTS `article`;
CREATE TABLE `article` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `author` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `category` varchar(255) NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of article
-- ----------------------------
INSERT INTO `article` VALUES ('1', 'koa2接口调试', 'wovert', 'Hello world', 'nodejs', '2018-11-21 16:09:14', '2018-11-21 16:09:14');
INSERT INTO `article` VALUES ('2', 'koa2接口调试', 'wovert', 'Hello world', 'nodejs', '2018-11-22 16:17:08', '2018-11-22 16:17:08');
INSERT INTO `article` VALUES ('3', 'koa2接口调试', 'wovert', 'Hello world', 'nodejs', '2018-11-22 16:17:25', '2018-11-22 16:17:25');
