function deleteNode(head, position) {
    var currentNode = head, nextNode = head.next;
    if (!position) {
        head = nextNode || null;
        return head;
    }
    for (var i = 0; i !== position - 1; i++) {
        currentNode = currentNode.next;
        nextNode = nextNode && nextNode.next;
    }
    currentNode.next = (nextNode && nextNode.next) || null;
    return head;
}