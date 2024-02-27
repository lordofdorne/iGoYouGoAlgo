def can_form_word(letters, word):
    word_map = {}

    for i in letters:
        word_map[i] = 1 + word_map.get(i, 0)

    for i in word:
        if i in word_map and word_map[i] > 0:
            word_map[i] -= 1
        else:
            return False
    return True