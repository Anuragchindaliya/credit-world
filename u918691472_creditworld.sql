-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Dec 20, 2022 at 04:01 PM
-- Server version: 10.5.17-MariaDB-cll-lve
-- PHP Version: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `u918691472_creditworld`
--

-- --------------------------------------------------------

--
-- Table structure for table `banks`
--

CREATE TABLE `banks` (
  `id` int(11) NOT NULL,
  `name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `content` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `img` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `createdAt` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `banks`
--

INSERT INTO `banks` (`id`, `name`, `slug`, `content`, `img`, `updatedAt`, `createdAt`) VALUES
(1, 'Hdfc Bank', 'hdfc-bank', 'In July 2004, HDFC Bank became the first bank in the county to offer credit cards in over 100 cities. Initially, the Credit Card was launched in over 40 cities. In the beginning, the credit cards were issued under three categories namely the HDFC Bank international silver credit card; international Gold credit card and the Health Plus International Credit Card. The Health Plus International Credit Card was the first credit card in India with a special feature of free inbuilt cashless mediclaim.', 'https://logos-download.com/wp-content/uploads/2016/10/HDFC_Bank_logo.png', '2022-12-19 15:58:15', '2022-12-19 21:32:04'),
(2, 'Sbi Bank', 'sbi-bank', 'The bank descends from the Bank of Calcutta, founded in 1806, via the Imperial Bank of India, making it the oldest commercial bank in the Indian subcontinent. The Bank of Madras merged into the other two \"presidency banks\" in British India, the Bank of Calcutta and the Bank of Bombay, to form the Imperial Bank of India, which in turn became the State Bank of India in 1955. The Government of India took control of the Imperial Bank of India in 1955, with Reserve Bank of India (India\'s central bank) taking a 60% stake, renaming it the State Bank of India.', 'https://upload.wikimedia.org/wikipedia/en/thumb/5/58/State_Bank_of_India_logo.svg/2560px-State_Bank_of_India_logo.svg.png', '2022-12-19 21:31:40', '2022-12-19 21:31:56'),
(3, 'Indusind Bank', 'insdusind-bank', 'IndusInd Bank Limited is an Indian new generation bank in Pune, established in 1994. The bank offers commercial, transactional, and electronic banking products and services. IndusInd Bank was inaugurated in April 1994 by then Union Finance Minister Manmohan Singh. Indusind Bank is the first among the new-generation private banks in India.\r\n\r\nThe bank started its operations with a capital amount of Rs. 1 billion among which Rs. 600 million were raised by Indian residents and Rs. 400 million were raised by Non-Resident Indians. The bank has specialized in retail banking services and continuously upgrades its support systems by introducing newer technologies. It is also working on expanding its network of branches all across the country along with meeting the global benchmark. According to the bank, its name is derived from the Indus Valley Civilisation.', 'https://www.pngitem.com/pimgs/m/153-1531648_indusind-bank-logo-vector-indusind-bank-logo-png.png', '2022-12-19 21:31:40', '2022-12-19 21:33:56');

-- --------------------------------------------------------

--
-- Table structure for table `cards`
--

CREATE TABLE `cards` (
  `id` int(11) NOT NULL,
  `bankId` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `img` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `content` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `cards`
--

INSERT INTO `cards` (`id`, `bankId`, `name`, `img`, `content`, `slug`, `createdAt`, `updatedAt`) VALUES
(1, 1, 'HDFC BANK BUSINESS MONEY BACK', 'https://www.creditcard.co.in/wp-content/uploads/2019/12/HDFC-Moneyback.jpg', 'Earn 5 reward points on every retail spending of Rs 150.\r\nredeem reward points for booking hotels or airlines tickets across\r\n ____150 + airlines and selected hotels both in India as well as abroad.\r\nReward points are valid only for a period of 3 years from the date of accumulation.', 'hdfc-bank-business-money-back', '2022-12-19 18:13:20', '2022-12-19 18:13:20');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `banks`
--
ALTER TABLE `banks`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cards`
--
ALTER TABLE `cards`
  ADD PRIMARY KEY (`id`),
  ADD KEY `bankId` (`bankId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `banks`
--
ALTER TABLE `banks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `cards`
--
ALTER TABLE `cards`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `cards`
--
ALTER TABLE `cards`
  ADD CONSTRAINT `FC_bankId` FOREIGN KEY (`bankId`) REFERENCES `banks` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
