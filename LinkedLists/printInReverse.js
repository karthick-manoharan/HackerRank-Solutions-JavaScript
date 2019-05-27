function reversePrint(head) {
    if (head && head.next != null) {
        reversePrint(head.next);
    }
    head && console.log(head.data);
}