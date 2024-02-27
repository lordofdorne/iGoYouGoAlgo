

def remove_duplicates(strings):
    seen = set()
    res = []

    for word in strings:
        if word not in seen:
            seen.add(word)
            res.append(word)
    return word