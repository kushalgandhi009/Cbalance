<?php
$doc = new DOMDocument();
$doc->load('http://www.rediff.com/rss/newsrss.xml');
$news = array();
$items = $doc->getElementsByTagName("item");
$i = 0;
foreach ($items as $item) {
    foreach($item->childNodes as $child) {
        if ($child->nodeName == "title") {
            $news[$i]['title'] = $child->textContent;
        }elseif($child->nodeName == "link"){
            $news[$i]['url'] = $child->textContent;
        }
    }
    $i++;
}
echo json_encode($news);
?>