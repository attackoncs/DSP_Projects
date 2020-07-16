<?php
/****************************************************************/
/* ATutor														*/
/****************************************************************/
/* Copyright (c) 2002-2008                                      */
/* Written by Greg Gay & Joel Kronenberg & Chris Ridpath        */
/* Inclusive Design Institute                                   */
/* http://atutor.ca												*/
/*                                                              */
/* This program is free software. You can redistribute it and/or*/
/* modify it under the terms of the GNU General Public License  */
/* as published by the Free Software Foundation.				*/
/****************************************************************/
// $Id$
define('AT_INCLUDE_PATH', '../../../include/');
require (AT_INCLUDE_PATH.'vitals.inc.php');
authenticate(AT_PRIV_READING_LIST);

if (isset($_POST['submit_no'])) {
	$msg->addFeedback('CANCELLED');
	Header('Location: index_instructor.php');
	exit;
} else if (isset($_POST['submit_yes'])) {
	$_POST['id'] = intval($_POST['id']);
	$reading_id = $_POST['id'];

	// delete the reading from the list
	$sql = "DELETE FROM %sreading_list WHERE course_id=%d AND reading_id=%d";
	$result = queryDB($sql, array(TABLE_PREFIX, $_SESSION[course_id], $reading_id));

	$msg->addFeedback('ACTION_COMPLETED_SUCCESSFULLY');
	header('Location: index_instructor.php');
	exit;
}

require(AT_INCLUDE_PATH.'header.inc.php');

$_GET['id'] = intval($_GET['id']); 
$reading_id = $_GET['id'];

// get the resource ID for this reading
$sql = "SELECT resource_id FROM %sreading_list WHERE course_id=%d AND reading_id=%d";
$row = queryDB($sql, array(TABLE_PREFIX, $_SESSION['course_id'], $reading_id), TRUE);

if(count($row) > 0){
	// get the external resource using the resource ID from the reading
	$resource_id = $row['resource_id'];

	$sql = "SELECT title, date FROM %sexternal_resources WHERE course_id=%d AND resource_id=%d";
	$resource_row = queryDB($sql, array(TABLE_PREFIX, $_SESSION[course_id], $resource_id), TRUE);
    
    if(count($resource_row) > 0){
		$hidden_vars['id'] = $reading_id;
		$confirm = array('RL_DELETE_READING', AT_print($resource_row['title'], 'reading_list.title'));
		$msg->addConfirm($confirm, $hidden_vars);
		$msg->printConfirm();
	}
} else {
	$msg->printErrors('ITEM_NOT_FOUND');
}

require(AT_INCLUDE_PATH.'footer.inc.php');
?>